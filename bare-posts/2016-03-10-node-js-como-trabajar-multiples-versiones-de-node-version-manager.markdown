---
author: jansanchez
comments: true
date: 2016-03-10 05:15:04+00:00
layout: post
link: https://frontendlabs.io/3397--node-js-como-trabajar-multiples-versiones-de-node-version-manager
slug: node-js-como-trabajar-multiples-versiones-de-node-version-manager
title: Cómo trabajar con múltiples versiones de Node js
wordpress_id: 3397
categories:
  - Javascript
tags:
  - Automatización
  - ECMAScript
  - Front-End
  - Grunt
  - Gulp
  - Javascript
  - Lenguaje de programación
  - Linux
  - Nodejs
  - npm
  - Ubuntu
---

## Trabajando con múltiples versiones de Node js

A veces **necesitamos usar más de una versión de Node js **en un mismo equipo (ordenador). Ya sea porque estamos trabajando con **proyectos escritos en nuevas versiones de Node js**, proyectos escritos en antiguas versiones de Node js ó tal vez porque no usamos Docker (pero este es un tema para otro artículo).

**Para entender el caso planteado en este artículo, veamos un ejemplo: **

Digamos que actualmente estoy trabajando **mis proyectos antiguos **con la versión 0.12.9 de **Node js**, pero tengo un **proyecto nuevo **en el cual el cliente me pide que trabaje con la versión 5.6.0 de Node js. Y como bien sabemos esta versión de Node js tiene un amplio soporte para características de [ES6](https://frontendlabs.io/?s=es6), así que ¿Por qué no ir practicando algo de ES6 en este proyecto? (claro, siempre que lo hagamos de una forma muy responsable).

Debido a que los motivos pueden ser muchos otros, en este artículo veremos como solucionar de una manera práctica esta situación.

### Entonces, ¿Cómo hago para trabajar con distintas versiones de Node js?

Afortunadamente para eso existen los paquetes Node js: [nvm ](https://www.npmjs.com/package/nvm) y [n](https://www.npmjs.com/package/n), que seguramente no son la únicas opciones, pero por esta vez y debido a su simplicidad nos enfocaremos sólo en el paquete **n**.

## ¿Qué es n?

**n **es un paquete de Node js que se encarga de administrar las versiones de Node js, su instalación y uso es tan simple como su nombre.

## ¿Cómo instalar n?

Para instalar n, obviamente necesitamos tener [instalado Node js](https://frontendlabs.io/232--como-instalar-node-js-debian-linux). Una vez que tenemos instalado Node js, entonces simplemente **instalamos n de forma global**, con el siguiente comando:

    <code>sudo npm install -g n
    </code>

También existen otras formas de instalarlo, por ejemplo compilandolo o mediante otros instaladores de terceros, si deseas instalarlo de diversas formas puedes revisar la [documentación ](https://github.com/tj/n#installation)para esos casos.

## ¿Cómo uso n?

Es sencillo, una vez que instalaste n de forma global, simplemente debes comenzar a instalar las versiones de Node js con las que deseas trabajar o las versiones entre las que quieres cambiar rápidamente, por ejemplo instalaremos las versiones 0.12.9, 4.2.6, 5.6.0respectivamente con los siguientes comandos:

    <code>sudo n 0.12.9
    </code>




    <code>sudo n 4.2.6
    </code>




    <code>sudo n 5.6.0
    </code>

A continuación veremos el caso en el que tengo instaladas las versiones 4.2.6y 5.6.0 e instalo la versión 0.12.9

![como instalar multiples versiones de Node js](https://frontendlabs.io/wp-content/uploads/2016/02/n.gif)

Como podemos ver, es muy sencillo instalar versiones adicionales de Node js, y también podemos ver que simplemente con escribir n ó sudo n, dependiendo de cómo tengamos configurado nuestro sistema operativo, podremos elegir con que versión de Node js trabajaremos y podremos cambiar de versión cada vez que así lo deseemos, como se puede apreciar en el siguiente video:

![como cambiar multiples versiones de Node js](https://frontendlabs.io/wp-content/uploads/2016/02/n-versions.gif)

## ¿Cómo desinstalo versiones de Node js con n?

Desinstalar versiones de Node js con n es muy simple. Por ejemplo el comando para desinstalar la versión 0.12.9 de Node js sería el siguiente:

    <code>sudo n rm 0.12.9
    </code>

En el siguiente video podemos ver cómo desintalar la versión 0.12.9 de Node js.

![como desinstalar multiples versiones de Node js](https://frontendlabs.io/wp-content/uploads/2016/02/n-remove-versions.gif)

Espero que este artículo les sirva para poder instalar múltiples versiones de Node js en un mismo Sistema Operativo y administrar estas versiones rápidamente con el paquete n.

## Fuentes

NPM. _Interactively Manage All Your Node Versions. _[En línea][fecha de consulta: 18 de febrero del 2016].
  
Disponible en: [https://www.npmjs.com/package/n](https://www.npmjs.com/package/n).
