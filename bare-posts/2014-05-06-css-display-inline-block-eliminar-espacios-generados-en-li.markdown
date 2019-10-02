---
author: Xio Caro
comments: true
date: 2014-05-06 20:05:30+00:00
layout: post
link: https://frontendlabs.io/678--css-display-inline-block-eliminar-espacios-generados-en-li
slug: css-display-inline-block-eliminar-espacios-generados-en-li
title: "CSS Display inline-block: eliminar espacios generados en li"
wordpress_id: 678
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

Esta peculiar situación me paso cuando deje de usar los "**float:left**" y cambie a "**display:inline-block**" ignorando los problemitas que me fuera a ocasionar, pero a la vez celebrando las ventajas que me diera sobre la propiedad "**float**", la primera desventaja que vi fue al colocar en mis listas el atributo "inline-block" el cual me generaba espacio entre ellas, busqué varias soluciones y mi favorita fue esta:

\*Jugar con el tamaño de fuente "**font-size**" dándole "**0**" al contenedor padre, y colocándo el tamaño de fuente requerido a los hijos.

    <code>
    ul
       font-size 0
       li
         display inline-block
         font-size 16px
    </code>

Para entender mejor mostraré unos ejemplos breves:

## Botones: nav ul li

[![botones - inline-block](https://frontendlabs.io/wp-content/uploads/2014/05/Captura-de-pantalla-2014-05-06-a-las-16.12.32.png)](http://codepen.io/xiocaro/pen/wigvG?editors=110)

1. Generamos nuestra maqueta en [Jade](http://jade-lang.com/):


    <code>
    nav
       ul
         li
           a(href="javascript:;" , title="botón 1") botón 1
         li
           a(href="javascript:;" , title="botón 2") botón 2
         li
           a(href="javascript:;" , title="botón 3") botón 3
         li
           a(href="javascript:;" , title="botón 4") botón 4
    </code>

2. Los estilos que usaremos son:


    <code>
    nav
      ul
        font-size 0
        padding 0
        li
          display inline-block
          font-size 16px
          line-height 17px
          text-align center
          width 25%
          a
            background gray
            border-radius 5px
            color #fff
            padding 5px 20px
            text-decoration none
            &:hover
              background #028b9b
    </code>

## Contenidos: ul li

[![contenidos - inline-block](https://frontendlabs.io/wp-content/uploads/2014/05/Captura-de-pantalla-2014-05-06-a-las-16.14.24.png)](http://codepen.io/xiocaro/pen/wigvG?editors=110)

1. Generamos nuestra maqueta en [Jade](http://jade-lang.com/):


    <code>
    article
       ul
         li
           p Si un problema tiene solución, no hace falta preocuparse. Si no
             tiene solución, preocuparse no sirve de nada.
         li
           p Si un día te sientes inútil y deprimido… ¡¡¡recuerda que fuiste
             el espermatozoide más veloz de todos…!!!
         li
           p Nos preguntamos ¿quién me he creído para ser brillante,
             espléndido, talentoso, sensacional?, pero en realidad ¿quiénes
             nos hemos creído para no serlo?.
         li
           p Tienes toda la vida por delante para pulir defectos, y toda la
             vida por detrás para acumular virtudes.
    </code>

2. Los estilos que usaremos son:


    <code>
    article
      ul
        font-size 0
        padding 0
        li
          box-sizing border-box
          -moz-box-sizing border-box
          -webkit-box-sizing border-box
          display inline-block
          font-size 16px
          line-height 18px
          padding 10px
          text-align center
          vertical-align top
          width 25%
          min-width 200px
          p
            background url("PaperTexture-2.jpg") #E1C07D
            border-radius 10px
            box-sizing border-box
            -moz-box-sizing border-box
            -webkit-box-sizing border-box
            margin 0
            padding 20px
            &:hover
              box-shadow 0 2px 4px #333
    </code>

## Display: inline-block - Contenidos de imágenes: ul li img

[![contenidos imagenes - inline-block](https://frontendlabs.io/wp-content/uploads/2014/05/Captura-de-pantalla-2014-05-06-a-las-16.15.38.png)](http://codepen.io/xiocaro/pen/wigvG?editors=110)

1. Generamos nuestra maqueta en [Jade](http://jade-lang.com/) similar a las anteriores:


    <code>
    article
       ul
         li
           img(src="image1.jpeg", alt="xio")
         li
           img(src="image2.jpg", alt="xio")
         li
           img(src="image3.jpg", alt="xio")
         li
           img(src="image4.jpg", alt="xio")
    </code>

2. Los estilos que agregaremos a lo que ya tenemos son para "**img**" :


    <code>
    article
      ul
        li
          img
            border 5px solid #fff
            box-shadow 0 2px 4px #333
            height auto
            width 80%
    </code>

\*Para terminar de entender y poner a prueba estos ejemplos les dejo este [link](http://codepen.io/xiocaro/pen/wigvG?editors=110).

See the Pen [Css Display inline-block ](http://codepen.io/xiocaro/pen/wigvG/) by Xio ([@xiocaro](http://codepen.io/xiocaro)) on [CodePen](http://codepen.io).
