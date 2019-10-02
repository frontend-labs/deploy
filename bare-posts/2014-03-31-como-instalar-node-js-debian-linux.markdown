---
author: jansanchez
comments: true
date: 2014-03-31 06:20:22+00:00
layout: post
link: https://frontendlabs.io/232--como-instalar-node-js-debian-linux
slug: como-instalar-node-js-debian-linux
title: Como instalar Node Js en Debian Linux
wordpress_id: 232
categories:
  - Linux
tags:
  - Coffescript
  - Debian
  - Grunt
  - Jade
  - Javascript
  - mint
  - Nodejs
  - Stylus
  - Template engine
  - Ubuntu
---

**Node Js** es una plataforma construida con  el JavaScript runtime de Chrome que sirve para crear fácilmente aplicaciones de red  rápidas y escalables.
Node Js utiliza un modelo de Entrada y Salida no bloqueante dirigida por eventos, que a su vez lo hace muy ligero, eficiente e ideal para las aplicaciones en tiempo real que manejan muchos datos, vamos a instalarlo!.

## Instalando Node JS

Abrimos nuestro terminal o consola y escribimos lo siguiente:

    <code>
    sudo apt-get update && sudo apt-get install git-core curl build-essential openssl libssl-dev
    </code>

Luego nos dirigimos a la ruta donde deseamos clonar Node Js, en mi caso la ruta es la siguiente:

    <code>
    cd ~/
    </code>

### Clonamos Node Js

    <code>
    git clone https://github.com/nodejs/node.git node && cd node
    </code>

Si queremos instalar la ultima versión, nos saltamos el siguiente paso y vamos directo al paso: **crear el makefile**.

**Pero si queremos instalar otra versión especifica de node Js, apuntamos hacia por ejemplo la versión **0.12.0** de la siguiente manera:**

    <code>
    git checkout v0.12.0
    </code>

Luego de esto continuamos con el proceso de instalación normal y procedemos a crear el makefile.

### Creamos el makefile

    <code>
    ./configure --openssl-libpath=/usr/lib/ssl
    </code>

### Preparamos la instalación

    <code>
    make
    </code>

### Instalamos

    <code>
    sudo make install
    </code>

Verificamos que versión de Node Js hemos instalado

    <code>
    node -v
    </code>

Verificamos que versión de NPM hemos instalado

    <code>
    npm -v
    </code>

### Si deseamos instalamos algunos Modulos de Node Js

#### Jade - Motor de plantillas y preprocesador HTML

    <code>
    npm install -g jade
    </code>

#### Stylus - Preprocesador CSS

    <code>
    npm install -g stylus
    </code>

#### Coffee Script - Preprocesador Javascript

    <code>
    npm install -g coffee-script
    </code>

Y listo, con estos sencillos pasos ya tenemos instalado Node Js y algunos de sus más famosos módulos  en nuestro equipo, Node Js tiene muchos módulos interesantes y muy útiles, si deseas puedes revisarlos más a detalle en la web oficial de [NPM](https://www.npmjs.org/).

Si te interesa aprender más sobre Jade Language, no dudes en pasar por el siguiente post [Jade Language – Motor de plantillas para nodeJS y Preprocesador HTML](https://frontendlabs.io/70--jade-language-node-template-engine-and-html-preprocessor).
