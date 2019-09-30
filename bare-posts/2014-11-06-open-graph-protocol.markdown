---
author: pauldiaz
comments: true
date: 2014-11-06 17:57:55+00:00
layout: post
link: https://frontendlabs.io/1956--open-graph-protocol
slug: open-graph-protocol
title: ¿Qué es el Open Graph Protocol?
wordpress_id: 1956
categories:
- Html
- SEO
tags:
- Facebook's Debugger
- Metadata
- Open Graph Protocol
- Social Graph
---

## Open Graph Protocol


El **Open Graph Protocol **es un método simple que nos permite incluir meta información en nuestra página web y así convertirla en un objeto **Social Graph**, una vez siendo un objeto puede interactuar con otros objetos **Social Graph** como el share de Google+ o el like de Facebook de modo correcto.

Una manera sencilla de entenderlo es pensar que cuando uno se registra en Facebook nos estamos convirtiendo en un objeto **Social Graph **( sí, somos objetos :( ) pasamos a formar parte de un mapa global de conexiones sociales, en este mapa ( o universo paralelo ) no interactuas con saludos o regalos, sino con likes o share; entonces, activando el **Open Graph Protocol** en nuestra web la convertimos en un objeto **Social Graph** manipulable.


## Metadata básica


Para activar el Open Graph en nuestra web debemos de agregar los metadatos básicos dentro del **<head></head>** de nuestra web, las 4 propiedades requeridas para cualquier página son:

**og:title** : El título del objeto como se desea que aparezca; ejemplo, "FrontEnd Labs OG". No hay limite de caracteres, pero por buena practica se recomienda poner entre 60 y 90 caracteres; en el caso de Facebook si pones más de 100 caracteres este solo tomará 88.
**og:type** : Especificamos el tipo del objeto, ejemplo, "website". - aquí una lista con los [tipos](http://ogp.me/#types) -
**og:image** : Una URL que apunte a la imagen que representará a tu objeto.
**og:url** :  La URL canónica de tu objeto que será el ID permanente del objeto; ejemplo, "https://frontendlabs.io/" .

    
    <!DOCTYPE html>
    <html prefix="og: http://ogp.me/ns#">
    <head>
    	<title>FrontEnd Labs OG</title>
    	<meta property="og:title" content="FrontEnd Labs OG" />
    	<meta property="og:type" content="website" />
    	<meta property="og:image" content="https://frontendlabs.io/frontend-labs-facebook.png" />
    	<meta property="og:url" content="https://frontendlabs.io/" />
    </head>
    <body>
    
    </body>
    </html>
    




## Metadata Opcional


**og:description** : Algunas líneas descriptivas para el objeto. Por buena practica no debemos de usar más de 200 caracteres.
**og:locale** : Declaramos el lugar de procedencia del objeto en el formato lenguaje_TERRITORIO; ejemplo, "es_PE".
**og:site_name** : Si la web o la app es grande, por decirlo así, esta propiedad será la que identifique a todo el site; ejemplo, "frontend-labs" ya que la web de referencia es "https://frontendlabs.io/".
**og:audio** : La URL del audio que acompaña este objeto.
**og:video** : La URL del video que complementa el objeto creado.

    
    <meta property="og:description" content="Open Graph Protocol, mapa global de conexiones sociales" />
    <meta property="og:locale" content="es_PE" />
    <meta property="og:site_name" content="frontend-labs" />
    <meta property="og:audio" content="http://example.com/og/theme.mp3" />
    <meta property="og:video" content="http://example.com/og/trailer.swf" />
    




## extras


También pueden incluir más de una imagen o más de un lenguaje usando [arrays](http://ogp.me/#array)

    
    <meta property="og:image" content="https://frontendlabs.io/frontend-labs-facebook_01.png" />
    <meta property="og:image" content="https://frontendlabs.io/frontend-labs-facebook_02.png" />
    <meta property="og:image" content="https://frontendlabs.io/frontend-labs-facebook_03.png" />
    
    <meta property="og:locale:alternate" content="fr_FR" />
    <meta property="og:locale:alternate" content="en_EN" />
    


Si necesitas más detalles sobre ésto solo debes de ingresar a la [documentación oficial](http://ogp.me/).


## Debugger


Para saber si lo estamos haciendo bien o mal, o donde podemos hacer mejoras, Facebook pone a nuestra disposición una herramienta de [Debugger](https://developers.facebook.com/tools/debug/)

Lo único que debemos de hacer es ingresar la URL a la que deseamos hacerle el debug
![Open Graph Protocol - Facebook's debugger](https://frontendlabs.io/wp-content/uploads/2014/11/debugger_011.png)

Luego de darle en "Debug" obtendremos un informe
![Open Graph Protocol - informe del debugger](https://frontendlabs.io/wp-content/uploads/2014/11/debugger_02.png)

Algo interesante de este ejemplo es el "Time Scraped" el cual refleja la última vez que se realizó un scrapeo del **Open Graph**, es decir, si hemos cambiado alguna propiedad del objeto **Social Graph** (og:title, og:image, og:url) después del último scrape, este cambio no se reflejará al usar el objeto. Por ejemplo, al compartir en Facebook puede que nos muestre una imagen que no es la actual o un título antiguo, para solucionar esto debemos de actualizar las propiedades del objeto o "limpiar el caché", simplemente dándole al botón **Fetch new scrape information.
**![Open Graph Protocol - nuevo scrape de la url](https://frontendlabs.io/wp-content/uploads/2014/11/debugger_04.png)

Con ésto las propiedades del objeto deben de actualizarse, además de mostrarnos mejoras que debemos de hacerle a las propiedades que le pasamos al objeto. También nos mostrará las propiedades y una vista previa de cómo se verá el objeto al usarlo.![Open Graph Protocol - vista previa de las propiedades del objeto](https://frontendlabs.io/wp-content/uploads/2014/11/debugger_05.png)

Suele pasar que el error más común es no especificar una imagen con dimensiones correctas - **"og:image could not be downloaded or is too small"** - por buenas prácticas, Facebook requiere una imagen de 1200 x 630px para una buena presentación en dispositivos de alta resolución, pero con 600 x 315px sería suficiente.

PD: Para fines de este post hemos usado el debug de Facebook. Si es necesario pueden usar el [debug de Google](http://www.google.com/webmasters/tools/richsnippets), ya que Google+ también usa el **Open Graph Protocol** para sus relaciones.
