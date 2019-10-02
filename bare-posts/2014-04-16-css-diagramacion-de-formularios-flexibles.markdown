---
author: Xio Caro
comments: true
date: 2014-04-16 21:29:11+00:00
layout: post
link: https://frontendlabs.io/407--css-diagramacion-de-formularios-flexibles
slug: css-diagramacion-de-formularios-flexibles
title: CSS Diagramación de Formularios Flexibles
wordpress_id: 407
categories:
  - Css
  - Diseño
  - Html
tags:
  - CSS3
  - HTML5
  - Less
  - Sass
  - Stylus
---

La idea aquí es tener una estructura de formulario (_HTML_) el cual a base de "**clases**" declaradas en nuestra hoja de estilos **Css** se ajuste a nuestras necesidades y/o requerimientos, cambiando así su presentación visual. En este post aprenderemos a como obtener 3 diferentes diagramaciones de formularios sin alterar la maquetación html, uds pueden hacer infinidad de cosas con los estilos como cambiarle: colores, tamaños, posiciones, vista según dispositivos y/o desktop; por ahora solo veremos este diseño, lo demás queda a su imaginación :)

1. Hacemos nuestra estructura HTML, en este caso lo hice con [Jade](http://jade-lang.com/). Es aquí class= "**frm_validate**" donde agregaremos una clase más como "**vertical**" o "**lesslabel**" .

[code lang="ruby"]

form(action="POST", class="frm_validate ", id="frmValidate", name="frmValidate")

[/code]

[![Form Horizontal](https://frontendlabs.io/wp-content/uploads/2014/04/Captura-de-pantalla-2014-05-05-a-las-18.06.50.png)](https://frontendlabs.io/wp-content/uploads/2014/04/Captura-de-pantalla-2014-05-05-a-las-18.06.50.png)

[code lang="ruby"]

form(action="POST", class="frm_validate vertical", id="frmValidate", name="frmValidate")

[/code]

[![Form Vertical](https://frontendlabs.io/wp-content/uploads/2014/04/Captura-de-pantalla-2014-05-05-a-las-18.06.17.png)](https://frontendlabs.io/wp-content/uploads/2014/04/Captura-de-pantalla-2014-05-05-a-las-18.06.17.png)

[code lang="ruby"]

form(action="POST", class="frm_validate lesslabel", id="frmValidate", name="frmValidate")

[/code]

[![Form sin label](https://frontendlabs.io/wp-content/uploads/2014/04/Captura-de-pantalla-2014-05-05-a-las-18.05.28.png)](https://frontendlabs.io/wp-content/uploads/2014/04/Captura-de-pantalla-2014-05-05-a-las-18.05.28.png)

2. Declaramos nuestros atributos Css ([stylus](http://learnboost.github.io/stylus/)), tanto para la clase por default que vendría a ser "**frm_validate**" como las otras dos ya mencionadas donde cambiamos la diagramación y diseño del formulario recordemos que todos los atributos de elementos se pueden modificar anidando a clases padres que vendría a ser "**vertical**" o "**lesslabel**" :

[code lang="css"]

.frm_validate
  width 365px
  margin 30px auto 0
  text-align left
  &.vertical
    label
      display block
      float none
      line-height 22px
      &.ioption
        float left
        font-size 16px
        margin-left 70px                
        &:first-child
          margin 0
        &.ck
          padding-right 20px
    input[type="text"],input[type="email"],input[type="tel"]
      width 340px
    textarea
      width 340px
    .btn
      margin 0
  &.lesslabel
    label
      display none
      &.ioption
        display block
        font-size 16px
        line-height 18px
        margin-left 60px
        width 80px
        input[type="radio"]
          top 4px        
        &:first-child
          margin 0
        &.ck
          padding-right 20px
    input[type="text"],input[type="email"],input[type="tel"]
      width 340px
    textarea
      width 340px
    .btn
      margin 0

[/code]

3. Para nuestros "**label**" e "**input**" ,

[code lang="ruby"]

.form_control
  label(for="txtName") Nombre
  input(type="text", name="txtName", id="txtName", placeholder="Ingrese su Nombre")

[/code]

Las clases(_stylus_) que también usaremos son "**form_control**" :

[code lang="css"]

.form_control
  margin-bottom 15px
  \*zoom 1
  &:before,&:after
    display table
    content ""
    line-height 0
  &:after
    clear both
  label
    margin 0
    float left
    font-size 16px
    line-height 35px
    width 90px
    &.ioption
      cursor pointer
      line-height 35px
      padding-left 20px
      position relative
      input[type="radio"],input[type="checkbox"]
        left 0
        margin 0
        padding 0
        position absolute
        top 12px
      &.ck
        font-size 13px
        line-height 16px
        margin-left 90px
        width auto
        input[type="checkbox"]
          top 2px
  input[type="text"],input[type="email"],input[type="tel"]
    background-color #fff
    border 1px solid #999
    border-radius 10px
    font 16px/30px 'Maven Pro', sans-serif
    height 30px
    padding 2px 10px
    width 250px
  textarea
    background-color #fff
    border 1px solid #999
    border-radius 10px
    font 16px/19px 'Maven Pro', sans-serif
    height 70px
    padding 7px 10px
    width 250px

[/code]

4. Veamos cómo funciona cada estilo:

"**frm_validate**" : este viene a ser a lo que llamo una clase **padre**, donde puedo anidar todas las clases que se me ocurra para obtener resultados diferentes visualmente.

"**form_control**" : aquí indicamos para el input ya sea del tipo "text" o "textarea" el color de borde como el de fondo, tamaño de texto, ancho, bordes, otros. Para el label indicamos el tamaño de texto, visibilidad, otros.

Nota: para muchos quizás sea nuevo ver en los estilos estos símbolos "**&.nombredeclase** y/o **&:before, &:after**" , eso lo usamos cuando queremos anidar clases obteniendo así una clase padre. Más información [aquí](http://learnboost.github.io/stylus/).

5. Para entenderlo mejor veamos [aquí](http://codepen.io/xiocaro/pen/ljEhk?editors=110).

See the Pen [Css Diagramación Formularios](http://codepen.io/xiocaro/pen/ljEhk/) by Xio ([@xiocaro](http://codepen.io/xiocaro)) on [CodePen](http://codepen.io).

[![Formulario](https://frontendlabs.io/wp-content/uploads/2014/04/final.png)](http://xiocaro.com/demo/form/)

Espero les sea útil y entendible. Para los que no son usuarios de [Jade](http://jade-lang.com/), entren [aquí](http://html2jade.aaron-powell.com/) para convertir el lenguaje HTML a Jade, y para usar [Stylus](http://learnboost.github.io/stylus/) haciendo pruebas con nuestros propio Css clik [aquí](http://css2stylus.com/).
