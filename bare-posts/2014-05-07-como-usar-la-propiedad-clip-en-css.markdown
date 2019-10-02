---
author: erikfloresq
comments: true
date: 2014-05-07 14:22:35+00:00
layout: post
link: https://frontendlabs.io/709--como-usar-la-propiedad-clip-en-css
slug: como-usar-la-propiedad-clip-en-css
title: Como usar la propiedad Clip en CSS
wordpress_id: 709
categories:
  - Css
  - Html
tags:
  - CSS3
  - HTML5
  - Less
  - Sass
  - Stylus
---

La propiedad Clip es muy interesante pero no veo que mucha gente lo use y es muy raro ya que esta propiedad esta desde CSS 2.1.

Clip es una mascara que se le puede colocar a un elemento, en especial a una imagen que es donde se logra ver mejor el efecto.

Para poder usar Clip se tiene que tener la siguiente línea de código:

[code type="javascript"]
img.foto{
position: absolute;
top : 5px;
left: 5px;
clip : rect(90px;300px;180px;100px);
}
[/code]

Se tiene que tener en cuenta que:

- Al elemento que se le aplica el clip tiene que tener posición absoluta.
- Definir como aplicar el Clip según a un conjunto de coordenadas que pueden ser en px, %, em , etc.

Si tu colocas

[code type="javascript"]
clip : rect(20px;300px;180px;100px);
[/code]

A nivel gráfico equivale a esto

     <a href="https://frontendlabs.io/wp-content/uploads/2014/05/clipExample.png"><img src="https://frontendlabs.io/wp-content/uploads/2014/05/clipExample.png" alt="Ejemplo Clip" height="345" class="alignnone size-full wp-image-713" width="418"></img></a>

    Hasta ahi ya es muy útil esta propiedad, pero además funciona muy bien cuando le agregamos animate de css3

See the Pen [Clip With CSS3](http://codepen.io/erikfloresq/pen/DIjga/) by Erik Flores ([@erikfloresq](http://codepen.io/erikfloresq)) on [CodePen](http://codepen.io).

Como se vio en el ejemplo anterior solo fue cosa de cambiar las coordenadas de la mascara al momento de hacer hover, para que el clip se anime de una manera más que vistosa.
