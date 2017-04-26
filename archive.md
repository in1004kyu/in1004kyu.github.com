---
layout: page
permalink: /archive/
title: Archive
---

<section id="archive">
  {%for post in site.posts %}
    {% unless post.next %}
      <h3>{{ post.date | date: '%Y. %m' }}</h3>
      <ul class="this">
    {% else %}
      {% capture month %}{{ post.date | date: '%m' }}{% endcapture %}
      {% capture nmonth %}{{ post.next.date | date: '%m' }}{% endcapture %}
      {% if month != nmonth %}
        </ul>
        <h3>{{ post.date | date: '%Y. %m' }}</h3>
        <ul class="past">
      {% endif %}
    {% endunless %}
      <li><time>{{ post.date | date:"%m. %d" }}</time> <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul>
</section>
