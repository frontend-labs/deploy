---
author: jansanchez
comments: true
date: 2014-03-31 06:20:22+00:00
layout: post
path: /232--como-instalar-node-js-debian-linux
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

```bash
  sudo apt-get update && sudo apt-get install git-core curl build-essential openssl libssl-dev
```

Luego nos dirigimos a la ruta donde deseamos clonar Node Js, en mi caso la ruta es la siguiente:

```bash
cd ~/
```

### Clonamos Node Js

```bash
git clone https://github.com/nodejs/node.git node && cd node
```

Si queremos instalar la ultima versión, nos saltamos el siguiente paso y vamos directo al paso: **crear el makefile**.

**Pero si queremos instalar otra versión especifica de node Js, apuntamos hacia por ejemplo la versión **0.12.0** de la siguiente manera:**

```bash
git checkout v0.12.0
```

Luego de esto continuamos con el proceso de instalación normal y procedemos a crear el makefile.

### Creamos el makefile

```bash
./configure --openssl-libpath=/usr/lib/ssl
```

### Preparamos la instalación

```bash
make
```

### Instalamos

```bash
sudo make install
```

Verificamos que versión de Node Js hemos instalado

```bash
node -v
```

Verificamos que versión de NPM hemos instalado

```bash
npm -v
```

### Si deseamos instalamos algunos Modulos de Node Js

#### Jade - Motor de plantillas y preprocesador HTML

```bash
npm install -g jade
```

#### Stylus - Preprocesador CSS

```bash
npm install -g stylus
```

#### Coffee Script - Preprocesador Javascript

```bash
npm install -g coffee-script
```

Y listo, con estos sencillos pasos ya tenemos instalado Node Js y algunos de sus más famosos módulos  en nuestro equipo, Node Js tiene muchos módulos interesantes y muy útiles, si deseas puedes revisarlos más a detalle en la web oficial de [NPM](https://www.npmjs.org/).

Si te interesa aprender más sobre Jade Language, no dudes en pasar por el siguiente post [Jade Language – Motor de plantillas para nodeJS y Preprocesador HTML](https://frontendlabs.io/70--jade-language-node-template-engine-and-html-preprocessor).
