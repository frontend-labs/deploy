---
author: Carlos Huamani
comments: true
date: 2014-06-08 16:41:22+00:00
layout: post
link: https://frontendlabs.io/832--el-correo-puede-ser-responsive-2
slug: el-correo-puede-ser-responsive-2
title: ¿El correo puede ser responsive?
wordpress_id: 832
categories:
  - Css
  - Diseño
  - Html
tags:
  - CSS3
  - HTML5
  - Less
  - Responsive
  - Sass
  - Stylus
---

![correo responsive web design](https://frontendlabs.io/wp-content//uploads/2014/05/responsive-web-design-300x155.jpg)

Hoy en día, el correo electrónico tiene una gran importancia en los medios de comunicación, debido a que es una herramienta vital para casi todos los negocios, la cual ayuda a comunicarse con el cliente. Por ejemplo en el área de marketing, el correo permite llegar a una audiencia masiva y de manera cada vez más personal, lo cual permite fidelizar a los clientes. Mucho de estos correos (más del 50%) son abiertos por dispositivos móviles. Por lo tanto, cada vez es más importante, que al momento de  diseñar un correo electrónico html, asegurarnos que este se visualice de manera correcta en todo dispositivo.

El diseño de correos electrónicos con html es parecido a diseñar páginas webs en el pasado, donde existían varios dolores de cabeza como usar tablas... y tablas dentro de otras tablas; no existe un estándar real entre distintos clientes de correo electrónico; se necesita muchos hacks para verse correctamente incluso si esta bien diseñado; no funciona el javascript (por temas de seguridad)  y para agregar estilos es necesario insertarlos directamente al html.

## **¿Cómo funciona un correo electrónico?**

En primer lugar, explicaremos como hacer un correo electrónico antes de explicar como hacerlo responsive. Para diseñar un correo se debe identificar primero que herramientas son necesarias. Es decir, no contamos con varias etiquetas html como el div, section, header, footer, article, nav, entre otros. Además, se cuenta con una limitada lista de atributos css, los cuales deben ser insertados dentro de las etiquetas html.

Aquí tenemos un claro ejemplo de como se vería un correo electrónico bien estructurado.

<table border="0" cellpadding="0" cellspacing="0" width="100%">
<tr>
<td bgcolor="#333333">
<div align="center" style="padding: 0px 15px 0px 15px;">
<table border="0" cellpadding="0" cellspacing="0" width="500" class="wrapper">
<tr>
<td>…Content…</td>
</tr>
</table>
</div>
</td>
</tr>
</table>

_\*ejemplo tomado de [alistapart.com
](http://alistapart.com/article/can-email-be-responsive)_

Se puede notar como se anidan las tablas entre si y el uso de los atributos **border**, **cellpadding** y **cellspacing** con el fin de asegurar que no haya brechas innecesarias en el diseño. El **bgcolor** es aplicado sobre la etiqueta **td**, el cual es más confiable que el background o el background-color. Por otro lado, se esta usando la etiqueta **div** para centrar el contenido, pero solo se recomienda usar el div para este fin y no para la estructura principal del correo.

Por otro lado, el uso de las imágenes en los correos es muy similar al de la web. Sin embargo, en los correos electrónicos la muestra automática de imágenes es deshabilitada por defecto, por lo tanto en vez de ver un correo ordenado el suscriptor puede visualizar un correo algo difícil de entender.

[
](https://frontendlabs.io/wp-content/uploads/2014/06/can-email-be-responsive-1.png)[![correo responsive 1](https://frontendlabs.io/wp-content//uploads/2014/06/can-email-be-responsive-1.png)](https://frontendlabs.io/wp-content/uploads/2014/06/can-email-be-responsive-1.png)_\*ejemplo tomado de [alistapart.com
](http://alistapart.com/article/can-email-be-responsive)_

Mientras no haya una manera automática de habilitar estas imágenes, podemos mejorar la situación con el uso del atributo** alt** para agregar información a las imágenes que no se visualizan. Es más, podríamos agregar algunos estilos en linea al **alt** de la etiqueta **img** para para darle un estilo similar al diseño del correo**. **_[
](http://alistapart.com/article/can-email-be-responsive)_

<imgsrc="img/fluid-images.jpg"width="240"height="130"style="display: block; color: #666666; font-family: Helvetica, arial, sans-serif; font-size: 13px; width: 240px; height: 130px;"alt="Fluid images"border="0"class="img-max">

_\*ejemplo tomado de [alistapart.com
](http://alistapart.com/article/can-email-be-responsive)_

Usando el código de arriba, nuestras imágenes faltantes ahora tienen un poco más de orden.

[
](https://frontendlabs.io/wp-content/uploads/2014/06/can-email-be-responsive-2.png)[![correo responsive 2](https://frontendlabs.io/wp-content//uploads/2014/06/can-email-be-responsive-2.png)](https://frontendlabs.io/wp-content/uploads/2014/06/can-email-be-responsive-2.png)

_\*ejemplo tomado de [alistapart.com](http://alistapart.com/article/can-email-be-responsive)_

## **¿Cómo funciona el correo electrónico responsive ?**

Igual que las páginas webs responsive, existen tres pincipales componentes para hacer un correo responsive: flexible images, flexible layouts, y media queries.

Las únicas diferencias del uso de estas técnicas estan en su manera de ser implementadas.

Al momento de diseñar correos electrónicos, no hay que olvidar que se tiene un repertorio limitado de html y css. Lo que se usa generalmente en web como margins, floats, y ems no funciona en muchos clientes de correo. Por lo tanto, tenemos que pensar en alternativas.

### Flexible Images

Si bien es cierto lo usual es usar el width 100% para lograrlo, en este ambiente dicha solución presenta varios descuadres en distintos clientes de correo.Por lo tanto primero debemos indicarle las dimensiones especificas para luego redifinirlas.

El primer paso es asegurarse de que las imágenes estén bien codificadas.

<img src="responsive-email.jpg"width="500"height="200"border="0"alt="Can an email really be responsive?"style="display: block; padding: 0; color: #666666; text-decoration: none; font-family: Helvetica, arial, sans-serif; font-size: 16px;"class="img-max">

Podemos observar que la propiedad **display** se encuentra incluida dentro de la etiqueta img. Este un  ejemplo de los distintos hacks que son requeridos para lidiar con los diversos clientes de correo. Muchos de estos clientes de correo electrónico agregan un espacio alrededor de las imágenes tratando de arreglar los problemas que puede ocasionar el line-height, por eso se recomienda agregar el display block para eliminar los espacios extras de las imágenes y asi proteger la estrucutra de tu diseño.

Ahora, cuando necesitemos tener imágenes fluidas, podemos insertar el media query en el head de nuestro correo:

img[class="img-max”] {

width:100% !important;

height: auto !important;

}

No todas las imágenes necesitan ser fluidas. Los elementos como logos e iconos sociales suelen tener el mismo tamaño sin importar el dispositivo donde es visualizado, por lo que utilizaremos una clase para indicar que imágenes necesitaran ser fluidas.

Debido a que usamos estilos en linea, tenemos que usar la declaración **!important **para asegurarnos que los estilos serán asignados cuando el documento sea renderizado.

### Flexible Layout

Muchos de los diseñadores web están familiarizados con el diseño de páginas webs responsive usando los tamaños de los elementos semánticos con unidades relativas como porcentajes, ems y rems. Sin embargo, en el desarrollo de correos electrónicos nos vemos limitados al uso porcentajes para un diseño flexible, estos serán usados en linea sobre las tablas sujeto a algunas limitaciones.

Casi todas nuestras tablas emplearán porcentaje para sus anchos. La única excepción es la tabla del contenedor, la cual tendra dimensiones específicas para evitar conflictos con los clientes de correo que no manejen de manera correcta los porcentajes, usualmente la mayoria de versiones de Microsoft Outlook.

<table border="0" cellpadding="0" cellspacing="0" width="500" class="wrapper">

<tr>

<td>…Content…</td>

</tr>

</table>

Acorde al código de arriba se puede ver que establecemos un ancho específico de 500 pixeles.

Este contenedor tendrá todas las tablas a utilizar en el correo. Ahora podemos usar de manera segura los porcentajes para el tamaño de las tablas de adentro.

### Media Queries

En los correos, los media queries funcionan igual que en la web.  Al incluirlos en el head de nuestro correo, podemos enlazarlo con las etiquetas por medio de una clase.

Sin complicar las cosas, enlazaremos los viewports con un max-width de 525 pixeles. Luego, sobrescribiremos la clase wrapper con un width de 100% para forzar a que tome toda la pantalla del dispositivo móvil.

@media screen and (max-width:525px) {

table[class=“wrapper”] {

width:100% !important;

}

}

También, podemos enlazar cualquier tabla o elemento anidada al contenedor con el fin de mejorar la experiencia en los dispositivos móviles. Es mas, no seria mala idea redimensionar los tamaños de la letra y de los botones en los móviles.

@media screen and (max-width:525px) {

body, table, td, a {

font-size:16px !important;

}

table[id=“responsive-table”] {

width:100% !important;

}

}

El principal inconveniente de usar media queries es que no son soportados port todos. Mientras que los clientes de correo basados en WebKit como iOS Mail y el correo default de Android funcionan correctamente, en los dispositivos mas antiguos de Blackberry, Windows Phone 8 y la app de Gmail son indiferentes al uso de media queries.

Afortunadamente, iOS y Android tiene la mayor parte de los clientes que usan el móvil para revisar su correo, así que puedes tener la confianza que la mayoría de tus suscriptores visualizaran tu correo responsive de manera correcta.

**Conclusiones y Recomendaciones
**

Las técnicas descritas en este articulo es solo el comienzo. Varios diseñadores de correos están explorando la manera de usar web fonts, SVG y las animaciones CSS3 en los correos. Sin duda, el diseño de correos electrónicos es difícil, pero no por eso debemos detenernos en explorar y en experimentar en técnicas avanzadas para ver que funciona y que no en los distintos clientes de correo que tenemos.

Existen varias herramientas que puede ser de gran utilidad para el diseño de estos correos:

Enlaces de interés:

[Zurb](http://zurb.com/playground/responsive-email-templates): En esta pagina puedes encontrar distintas plantillas.
[PutsMail](http://putsmail.com/): Aqui podras probar tus correos enviándolos a diferentes clientes de correo
[Transactional Email Templates](https://github.com/mailgun/transactional-email-templates): En este enlace podemos encontrar plantillas de correos para distintos tipos de propositos, ya sean reseteo de contraseña, recordatorios, mensaje de bienvenida, etc.

Fuentes

Este articulo es como una traduccion (digo "como una traducción", porque no esta traducido al pie de la letra) del post de Jason Rodriguez en A List Apart
Enlace del post:[ http://alistapart.com/article/can-email-be-responsive](//alistapart.com/article/can-email-be-responsive)
