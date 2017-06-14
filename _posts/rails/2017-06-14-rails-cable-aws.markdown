---
layout: post
title:  "rails + actioncable + nginx + puma + aws elb 정리"
date:   2017-06-14 10:51:12 +0900
description: "rails의 actioncable을 사용할 때 본 서버와 다른 port를 사용하고 싶을 때가 있다. 여기서 aws의 elb를 사용할 경우 port 번호를 넘겨 받기 위해선 nginx에서 proxy_protocol를 사용해야하는데 처음에 이걸 몰라 많이 해맸다. 이에대한 전반적인 설정에 대한 내용을 정리한다."
tags:
- ruby-on-rails
- actioncable
- websocket
- puma
- nginx
- aws
- elb
- proxy_protocol
---

<div id="toc"><p class="toc_title">목차</p></div>

rails의 actioncable을 사용할 때 본 서버와 다른 port를 사용하고 싶을 때가 있다. 여기서 aws의 elb를 사용할 경우 port 번호를 넘겨 받기 위해선 nginx에서 proxy_protocol를 사용해야하는데 처음에 이걸 몰라 많이 해맸다. 이에 대한 전반적인 설정에 대한 내용을 정리한다. 

설정을 잘해놨지만 `WebSocket connection to 'wss://url:8080/cable' failed: Connection closed before receiving a handshake response`이 나와서 고통받는 개발자를 위한 내용이다. actioncable을 8080 port에서 사용하고 elb를 사용하며 nginx와 puma를 사용하는것을 전제로 한다. 그리고 ssl 환경이다. 다른 port를 사용하려면 번호를 다르게 주면 된다.

**Rails 설정**
-------------

### **production.rb 설정**
`config/environments/production.rb`
{% highlight ruby %}
config.action_cable.url = "wss://#{Settings.hostname}:8080/cable"
config.action_cable.allowed_request_origins = [/http:\/\/*/, /https:\/\/*/]
{% endhighlight %}

`Settings.hostname`은 서비스 root_url이다. action_cable은 다른 port(8080)에서 돌린다.

### **cable.yml 설정**
`config/cable.yml`
{% highlight ruby %}
development:
  adapter: redis
  url: redis://localhost:6379/6
alpha:
  adapter: redis
  url: redis://localhost:6379/6
test:
  adapter: async
production:
  adapter: redis
  url: redis://{aws-redis-url}:6379/6
{% endhighlight %}

### **주의**
`<%= action_cable_meta_tag %>`은 `<%= javascript_include_tag..`보다 항상 위에 있어야한다. 이렇게 해야 config.action_cable.url을 가져올 수 있다. 

**aws 설정**
-------------
### **인스턴스 설정**
security group에 8080 port range를 추가한다. 

### **Elastic Load Balancing 설정**
load balancer 표에서 사용할 load balancer를 우클릭하여 Edit security group에 방금 설정한 security group이 없으면 추가해준다. 그리고 Listener 탭에 들어가거가 다시 우클릭하여 Edit listeners를 클릭한다. 
![리스너 추가](/assets/images/loadbalancer.png)
그림과 같이 8080에 대한 내용을 추가한다. ssl을 사용한다면 인증키가 있어야한다. 443 port에서 사용하던걸 그대로 사용하면된다.

**Nginix 설정**
-------------
aws instance에 ssh로 들어가서 설정을 해야한다. 
### **서비스 config.rb**
<pre>
upstream 프로젝트이름 {
        server unix:///{puma.sock path};
}

server {
  listen       443 ssl;
  server_name {service_url};
  --ssl, 그외 설정--

  location / {
    proxy_pass             http://프로젝트이름;
    proxy_http_version     1.1;
    proxy_set_header       Connection "";
    proxy_set_header       Host $host;
    proxy_set_header       X-Real-IP  $remote_addr;
    proxy_set_header       X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header       X-Forwarded-Proto $scheme;
    proxy_redirect         off;
    proxy_set_header       Range $http_range;
    proxy_set_header       If-Range $http_if_range;
  }

}

server {
    server_name {service_url};
    listen 8080   proxy_protocol;
    real_ip_header   proxy_protocol;

    location / {
            proxy_http_version  1.1;
            proxy_pass   http://프로젝트이름;
            proxy_set_header  Connection  Upgrade;
            proxy_set_header  Upgrade  websocket;
            proxy_set_header  X-Forwarded-For  $proxy_protocol_addr;
            proxy_set_header  X-Real-IP  $proxy_protocol_addr;
    }
}

server {
  listen 80;
  server_name www.{service_url} {service_url};
  return 301 https://{service_url}$request_uri;
}

server {
  listen 443 ssl;
  server_name www.{service_url};
  return 301 https://{service_url}$request_uri;
}
</pre>
두번째 server block이 가장 중요하다. 8080 port 즉 actioncable의 요청을 받는곳이다. 여기서 proxy_protocol이 있는데, elb를 사용할 때 client의 connection을 받을 수 있는데 이를 proxy protocol이 해준다. [참조링크][참조링크]. 다 한 다음에 8080 port를 listen하는지 `netstat -tnlp`를 하여 8080을 확인한다. 잘 떠있으면 거의다 한 것이다.

**ELB policy 설정**
-------------
actioncable이 잘 되는지 확인해보면 `WebSocket connection to 'wss://url:8080/cable' failed: Connection closed before receiving a handshake response`이 뜨면서 안될 것이다. 방금 위에서 proxy_protocol을 사용했는데 이를 elb에 적용을 해줘야한다. aws cli로 해야한다. aws 브라우저에서 체크 할 수 있는지를 모르겠다. 이것 때문에 많이 해맸던거 같다ㅠ. aws cli는 로컬해서 해도된다. 그전에 aws cli 설정이 되어 있어야한다.

### **ELB policy 생성**
<pre>
aws elb create-load-balancer-policy --load-balancer-name $ELB_NAME --policy-name $POLICY_NAME --policy-type-name ProxyProtocolPolicyType --policy-attributes AttributeName=ProxyProtocol,AttributeValue=true
</pre>

ex)
<pre>
aws elb create-load-balancer-policy --load-balancer-name codly --policy-name EnableProxyProtocol --policy-type-name ProxyProtocolPolicyType --policy-attributes AttributeName=ProxyProtocol,AttributeValue=true
</pre>

### **ELB policy 확인**
<pre>
aws elb describe-load-balancer-policies --load-balancer-name $ELB_NAME
</pre>
ex)
<pre>
aws elb describe-load-balancer-policies --load-balancer-name codly

결과 : 
  ...
  {
      "PolicyAttributeDescriptions": [
          {
              "AttributeName": "ProxyProtocol",
              "AttributeValue": "true"
          }
      ],
      "PolicyName": "EnableProxyProtocol",
      "PolicyTypeName": "ProxyProtocolPolicyType"
  },
  ...
</pre>


### **backend-server policy 설정**
<pre>
aws elb set-load-balancer-policies-for-backend-server --load-balancer-name $ELB_NAME --instance-port 8080 --policy-names $POLICY_NAME
</pre>
ex)
<pre>
aws elb set-load-balancer-policies-for-backend-server  --load-balancer-name codly --instance-port 8080  --policy-names EnableProxyProtocol
</pre>

여기까지하고 테스트를 해보면 actioncable이 잘 될 것이다!

[참조링크]: https://www.nginx.com/resources/admin-guide/proxy-protocol/