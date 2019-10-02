---
author: erikfloresq
comments: true
date: 2014-08-29 16:04:44+00:00
layout: post
link: https://frontendlabs.io/1710--animaciones-con-loop-infinito-en-css3
slug: animaciones-con-loop-infinito-en-css3
title: Animaciones con loop infinito en CSS3
wordpress_id: 1710
categories:
  - Css
  - Diseño
  - tutorial
tags:
  - animación
  - CSS3
---

Vamos a crear un loading infinito, usando scale in y scale out, para eso usaremos lo siguiente

Animation

[sourcecode language="css"]
animation : scales 0.5s ease inifinite alternate
[/sourcecode]

Dónde:

- **scales** : es el nombre de la animación la cual proviene un animación creada con keyframes
- **0.5s** : es la duración de la animación en segundos
- **ease** : es el tipo de animación con la que se trabajara, puede ser ease-in, ease-in-out, ease-out
- **infinite** : es el tipo de iteración que tendrá la animación
- **alternate** : es la dirección de la animación, es el que nos permite hacer que nuestra animación funcione en reversa [aquí esta el truco]

Ademas tendrás que declara un keyframes que es el que en si hace la animación, ya que el animation solo ejecuta la animación

[sourcecode language="css"]
@keyframes scales{
from{
transform : scale(0.8)
}
transform : scale(1.1)
}
[/sourcecode]

**Si no colocas alternate, tu animación no sera cool**

[sourcecode language="css"]
animation : scales 0.5s ease infinite
[/sourcecode]

Sin el alternate, tu animación solo funcionara de ida y tendrá un corte en seco, para volver hacerse la animación y en verdad no se ve muy bien.

### En conclusión

**El secreto es en colocar infinite y alternate**

A manera de práctica me puse a crear un loading con puro animation y me quedo esto, aunque iré probando otras ideas

See the Pen [Animation with Infinite Loop in CSS3](http://codepen.io/erikfloresq/pen/cKgBy/) by Erik Flores ([@erikfloresq](http://codepen.io/erikfloresq)) on [CodePen](http://codepen.io).
