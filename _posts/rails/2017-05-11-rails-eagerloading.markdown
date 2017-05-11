---
layout: post
title:  "중첩된 includes 사용"
date:   2017-04-26 13:51:12 +0900
description: "n+1 문제를 해결할때 중첩된 includes 사용하는 법."
tags:
- ruby-on-rails
- n+1 problem
- eager loading
---

association이 중첩되거나(polymorphic) 둘 이상의 includes를 사용하고 싶을 때가 있다. 댓글과 대댓글의 관계가 있고, 댓글이 대댓글을 보거나 부모의 댓글을 참조하거나, 사용자 모델을 참조할때 includes 이렇게 활용할 수 있다.

아래와 같은 관계일 때
<pre>
Comment - commentable - comment
        - user
</pre>

comment는 comments를 가지고 있고, 사용자에 접근가능하고 부모 댓글(commentable)에 접근할때, comment의 comments 역시 같은 접근을 할때 아래와 같이 중첩된 includes를 사용할 수 있다.

{% highlight ruby %}
comments.includes({comments: [:comments, :user, :commentable]}, :user)
{% endhighlight %}


[참조링크][참조링크]


[참조링크]: http://stackoverflow.com/questions/24397640/rails-nested-includes-on-active-records