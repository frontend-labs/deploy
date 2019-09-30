---
author: andru255
comments: true
date: 2014-10-04 20:53:07+00:00
layout: post
link: https://frontendlabs.io/1878--reparar-el-flash-player-de-google-chrome-en-debian
slug: reparar-el-flash-player-de-google-chrome-en-debian
title: Reparar plugin flash player de Google Chrome en debian
wordpress_id: 1878
categories:
- Linux
tags:
- Debian
- flash-player
- google-chrome
- how to
- solucion
---

Si tienes problemas con tu navegador Google Chrome, no funciona el flash player y usas sistemas operativos o distros sea ubuntu o debian, este post puede ayudarte.

Según el [ issue](https://code.google.com/p/chromium/issues/detail?id=414135) y como indica la cita #7 logra solucinar este problema y es con seguir estos simples pasos:



Ten en cuenta la distro a usar y la version de google chrome que estas usando, en el caso resuelto fue bajo debian Wheezy en un sistema de 64 bits y la version de chrome 37.0.2062.120, en esta ruta estan los instaladores para sistemas como debian o ubuntu



[http://mirror.pcbeta.com/google/chrome/deb/pool/main/g/google-chrome-stable/](http://mirror.pcbeta.com/google/chrome/deb/pool/main/g/google-chrome-stable/)



Una vez que hayas descargado el paquete de la misma version de chrome que tienes, abres el paquete o puedes usar un lector de archivos comprimidos, te recomiendo usar el File Roller que funciona muy bien bajo debian :)





Al abrir bajo ese programa u otra herramienta visualizaras una serie de carpetas de las cuales tienes que ir a esta ruta:




    
    <code>
    opt/google/chrome/PepperFlash/
    </code>
    



Y encontraras el archivo


    
    <code>
    libpepflashplayer.so
    </code>
    





Copias ese archivo en una ruta, en este caso en una carpeta llamada “downloads” en mi carpeta “home” si ya lo tienes normal lo puedes copiar por el momento ahi porque igual sera algo temporal.



NOTA: En caso esteas usando el google-chrome es recomendable que lo cierres, porque a partir de ahora se tocaran partes sensibles que usa el navegador.



Se copia el archivo que acabamos de pasarlo a “downloads” a esta ruta con esta sentencia estando en mi carpeta “home”, nos ubicamos a esta carpeta en la terminal:




    
    <code>
    ~ cd ~
    
    ~ sudo mv downloads/libpepflashplayer.so /opt/google/chrome/PepperFlash
    </code>
    



Con esta sentencia se a copiado una version mejorada del lector del flashplayer del google chrome en modo superusuario.

Y listo abres tu chrome y debera funcionar :)
