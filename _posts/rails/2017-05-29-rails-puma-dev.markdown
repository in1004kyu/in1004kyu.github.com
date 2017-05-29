---
layout: post
title:  "puma-dev 동작 안할때 httpd를 의심하자."
date:   2017-05-29 10:51:12 +0900
description: "puma-dev를 설치했지만 동작을 안했을때의 조치법"
tags:
- ruby-on-rails
- puma-dev
---

puma-dev는 puma 환경에서 개발시 pow를 대신하는 도구이다. rails5로 upgrade시 puma가 기본으로 변경됐기 때문에 puma-dev를 활용하면 여러모로 좋을것 이다. rails s를 매번 안해도 되고. 성능도 좋다는 말도 있다. 

하지만 puma-dev가 동작을 안해서 삽질한 결과 httpd가 문제인 것을 발견했다. httpd는 아파치 하이퍼텍스트 전송 프로토콜 서버 프로그램이다. El Capitan 업그레이드시에 기본으로 추가시키는 것 같다. 문제는 httpd가 puma-dev의 요청을 뺏어간다는 것이다. 

해결책은 httpd를 disable 시키는 것이다.

<pre>
sudo launchctl unload -w /System/Library/LaunchDaemons/org.apache.httpd.plist
</pre>

`ps aux | grep httpd`을 했을 때 httpd가 나오지 않으면 된 것이다.

[참조링크][참조링크]


[참조링크]: https://github.com/puma/puma-dev/issues/79