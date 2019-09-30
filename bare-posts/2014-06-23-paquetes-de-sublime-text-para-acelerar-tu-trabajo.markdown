---
author: anareyna
comments: true
date: 2014-06-23 17:28:53+00:00
layout: post
link: https://frontendlabs.io/985--paquetes-de-sublime-text-para-acelerar-tu-trabajo
slug: paquetes-de-sublime-text-para-acelerar-tu-trabajo
title: Paquetes de Sublime Text para acelerar tu trabajo
wordpress_id: 985
categories:
- Automatización
- Código
tags:
- Código
- Editores de texto
- sublime text
---

Sublime Text es uno de los editores de código más rápidos que ha surgido en los últimos años. Cuenta con una gran comunidad  que produce muchos paquetes (o plugins) para acelerar el desarrollo de nuestros proyectos. Soporta las plataformas de OS X, Linux y Windows.

Si aún no estás utilizando Sublime Text puedes encontrar más información y descargar la versión 2 [aquí](http://www.sublimetext.com/) o la versión 3 (beta) [aquí](http://www.sublimetext.com/3). El día de hoy veremos algunos tips y paquetes que te pueden ser de mucha utilidad:

(Actualizado el 18 de junio de 2015)


# Atajos de teclado


Todas las combinaciones de teclado que vienen por defecto con Sublime se encuentran en el menú Preferences -> Key Binding - Default

![Captura de pantalla 2014-03-17 a la(s) 16.06.28](https://frontendlabs.io/wp-content/uploads/2014/03/Captura-de-pantalla-2014-03-17-a-las-16.06.28.png)

Para editar o agregar algún atajo tendremos que ubicar y copiar la parte de código que queremos personalizar desde el archivo "Key Bindings - Default" y luego pegarla en el archivo "Key Bindings - User", del mismo menú. Por ejemplo si quisiéramos agregar este atajo "ctrl+alt+c" para poder  comentar bloques de código con nuestro teclado tendríamos que poner las siguientes líneas (en "Key Bindings - User"):

[code lang="javascript"]
{ "keys": ["ctrl+/"], "command": "toggle_comment", "args": { "block": false } },
{ "keys": ["ctrl+shift+c"], "command": "toggle_comment", "args": { "block": true } },
[/code]

Otra de las funciones ocultas y que ahorra tiempo es el de copiar una línea de código. No necesitamos seleccionar toda la línea, simplemente ubicar el cursor en cualquier parte de ésta y pulsar "ctrl+c".


# Paquetes


Para poder instalar paquetes necesitas instalar el "Package control", sólo tienes que copiar un bloque de código en la consola de Sublime (menú View -> Show console). Entra a [este link](https://packagecontrol.io/installation) para las instrucciones.

Una vez que ya tengas el Package Control, puedes ir al menú Preferences -> Package Control -> Install Package o usar el atajo "ctrl+shift+p" para empezar a buscar cualquiera los paquetes que listo abajo.

![Captura de pantalla 2014-03-17 a la(s) 16.41.46](https://frontendlabs.io/wp-content/uploads/2014/03/Captura-de-pantalla-2014-03-17-a-las-16.41.46.png)

[SideBarEnhancements](https://github.com/titoBouzout/SideBarEnhancements)

Agrega mejoras  a los archivos y carpetas de la barra lateral, opciones muy usadas como "Abrir con...", "Buscar en proyecto", "Renombrar", "Abrir en explorador", etc

![Captura de pantalla 2014-03-17 a la(s) 16.09.06](https://frontendlabs.io/wp-content/uploads/2014/03/Captura-de-pantalla-2014-03-17-a-las-16.09.06.png)

[BracketHighligter](https://github.com/facelessuser/BracketHighlighter)

Bracket Highlighter resalta una variedad de llaves y etiquetas como: `[]`, `()`, `{}`, `""`, `''`, `<tag></tag>`, para identificar el inicio y fin de líneas de código de forma más rápida.

![](https://github-camo.global.ssl.fastly.net/771f9df16f29a134369cbcb0913f55932d156983/687474703a2f2f646c2e64726f70626f782e636f6d2f752f3334323639382f427261636b6574486967686c6967687465722f4578616d706c65312e706e67)

[Emmet](http://docs.emmet.io/)

Emmet te permite escribir grandes bloques de código en HTML a la velocidad de la luz, todo lo que tienes que usar son los ya conocidos selectores CSS.

[GitGutter](https://github.com/jisaacks/GitGutter)

Este paquete muestra un icono en el área izquierda de la ventana de sublime, indicando si una linea de código ha sido insertada, modificada o borrada.

![](https://raw.github.com/jisaacks/GitGutter/master/screenshot.png)

[HTMLBeautify](https://github.com/rareyman/HTMLBeautify)

Da formato (indentación) a código HTML haciendo que sea más fácil de leer.

[JsFormat](https://github.com/jdc0589/JsFormat)

Este es también un paquete para dar formato a código en Javascript.

[Sublimerge Pro](http://www.sublimerge.com/)

Busca diferencias entre dos archivos, resaltando los cambios y líneas con colores y de manera muy intuitiva. Para usarlo tendrás que usar "ctrl+alt+d".

![](http://www.sublimerge.com/Images/sublimerge-pro-linux.png)



[SetUI Icons Sublime](https://github.com/mrmartineau/SetiUI-Icons-Sublime)

Estos iconos fueron inspirados en el tema [set-ui de Atom](https://atom.io/themes/seti-ui) y ahora se puede usar con Sublime text y cualquier tema que nos guste funciona mejor con los temas oscuros como Theme Soda). Puedes ver las instrucciones para instalar en su [repositorio](https://github.com/mrmartineau/SetiUI-Icons-Sublime)

![](http://i.imgur.com/39O7rUY.jpg)



[HaoGist](https://github.com/xjsender/HaoGist)

Este plugin es particularmente útil si es que buscas subir archivos de código para compartir de manera pública o privada y rápida a través de los Gists de Github, para eso deberás configurar tu cuenta de Github como se muestra en las instrucciones del repositorio de HaoGist.

![](http://i.imgur.com/mq6lSC3.jpg)


# Temas


[Theme - Nil](https://github.com/nilium/st2-nil-theme)

![](https://github.com/nilium/st2-nil-theme/raw/master/dark.png)

[Theme - Spacegray](http://kkga.github.io/spacegray/)

![](http://kkga.github.io/spacegray/assets/spacegray.png)

[Theme - Soda](https://github.com/buymeasoda/soda-theme/)

![](https://github-camo.global.ssl.fastly.net/39feeec102d65ccd7a5b7d10bcf3acc674c8705b/687474703a2f2f6275796d6561736f64612e6769746875622e636f6d2f736f64612d7468656d652f696d616765732f73637265656e73686f74732f736f64612d322d6461726b2d7468656d652e706e673f763d32)

[Material Theme](http://equinusocio.github.io/material-theme/)

![](http://i.imgur.com/QOwhELN.png)

Si conoces más paquetes o tips para Sublime Text, puedes compartirlos en los comentarios :)
