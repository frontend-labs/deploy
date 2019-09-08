---
to: blog/<%= h.date() %>-<%= h.slugify(name) %>/index.md
unless_exists: true
---
---
path: "/<%= h.slugify(name) %>"
date: <%= h.date() %>
title: "<%= h.inflection.humanize(name) %>"
---

My Post - <%= h.inflection.humanize(name) %>