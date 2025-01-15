---
permalink: /
title: "About"
author_profile: true
authors: "Attila Asghari"
redirect_from: 
  - /about/
  - /about.html
---

welcome to my personal website

---
[view all blog posts](/year-archive/)

{% capture written_year %}'None'{% endcapture %}
{% for post in site.posts limit:3 %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% if year != written_year %}
    
    {% capture written_year %}{{ year }}{% endcapture %}
  {% endif %}
  {% include archive-single.html %}
{% endfor %}
