---
author: erikfloresq
comments: true
date: 2014-04-21 23:20:34+00:00
layout: post
link: https://frontendlabs.io/453--como-usar-bower-js-dependencias
slug: como-usar-bower-js-dependencias
title: Como usar Bower
wordpress_id: 453
categories:
  - Automatización
  - Javascript
tags:
  - bower
  - Javascript
  - Nodejs
  - yeoman
---

[Bower](http://bower.io/) es un gestor de librerías, es decir, te permite agregar, actualizar y eliminar paquetes(librerías, plugins, frameworks, etc) de las cuales depende tu proyecto.

## **Para instalar bower**

[code type="javascript"]
npm install -g bower
[/code]

## **Para obtener un paquete**

[code type="javascript"]
bower install <nombre del paquete>
[/code]

En este caso quiero bajar jquery
[![bower-get](https://frontendlabs.io/wp-content/uploads/2014/04/bower-get.png)](https://frontendlabs.io/wp-content/uploads/2014/04/bower-get.png)
Cuando bower nos indica **"not-cached"** es porque es la primera vez que lo a bajado y por ende no lo tiene cacheado, las demás lineas significa que se encontró el repositorio de donde bower gestiona el paquete.
Además vemos que cuando solo pones el nombre del paquete descarga la ultima versión.
**¿Por que veo rutas de github en la descarga ?**
Porque bower se apoya de repositorios los cuales están versionados mediante tags, los cuales veremos más adelante.

## Para obtener una versión en especial

[code type="javascript"]
bower install <nombre del paquete>#<version>
[/code]

[![change version](https://frontendlabs.io/wp-content/uploads/2014/04/change-version.png)](https://frontendlabs.io/wp-content/uploads/2014/04/change-version.png)
En este caso, estamos intentando pasar a una versión más antigua, en este caso bower nos indica si estamos seguro y nos da la opción de elegir. En el caso que queramos pasar a la versión mas reciente pasaría el mismo flujo.

## Listar los paquetes administrados desde bower

[code type="javascript"]
bower list
[/code]

[![list](https://frontendlabs.io/wp-content/uploads/2014/04/list.png)](https://frontendlabs.io/wp-content/uploads/2014/04/list.png)

En la imagen anterior vemos como bower nos indica que hay una versión mas reciente de jquery (latest is 2.1.1-rc2)

## Cambiar  la ruta donde bower hace las descargas de las librerias

Por default bower crea la carpeta bower_components, la cual puede ser cambiada en el archivo de nombre .bowerrc, en el caso que no exista, creela en la raiz de la carpeta donde se están descargando tus paquetes :D.

[code type="javascript"]
{
"directory": "public/bower_components"
}
[/code]

Por ejemplo si cambias la ruta como el siguiente ejemplo

[code type="javascript"]
{
"directory": "public/js/libs"
}
[/code]

Lo que haría bower es ir a la ruta y en el caso que no exista js  y libs crea las carpetas.

## Buscar paquetes

[code type="javascript"]
bower search <nombre del paquete>
[/code]

[![search](https://frontendlabs.io/wp-content/uploads/2014/04/search.png)](https://frontendlabs.io/wp-content/uploads/2014/04/search.png)
El detalle al momento de buscar es que si eres muy explicito con el nombre del paquete te puede salir una lista inmensa de resultados.

## Eliminar un paquete

[code type="javascript"]
bower uninstall <nombre del paquete>
[/code]

[![eliminar paquete](https://frontendlabs.io/wp-content/uploads/2014/04/eliminar-paquete.png)](https://frontendlabs.io/wp-content/uploads/2014/04/eliminar-paquete.png)
En este caso lo que hace bower es eliminar las carpeta que contiene el paquete.

## Usar bower con zsh y que te salga 'no matches found'

Este fue una incidencia que me ocurrió hace poco y ocurrió cuando intentaba instalar una version especifica de jquery y salía lo siguiente :
[code type="bash"]
$bower install jquery#1.11.1
zsh: no matches found:jquery#1.11.1
[/code]

Para solucionar esto solo tenemos que agregar en nuestro archivo ~/.zshrc lo siguiente :
[code type="bash"]
alias bower='noglob bower'
[/code]
