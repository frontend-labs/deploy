---
author: juanpablo
comments: true
date: 2016-02-08 17:25:22+00:00
layout: post
link: https://frontendlabs.io/3163--webpack-intro-en-espanol
published: false
slug: webpack-intro-en-espanol
title: Webpack en español - introducción y primeros pasos
wordpress_id: 3163
categories:
  - Automatización
  - Javascript
  - tutorial
---

En este articulo explicaremos que es webpack, que ventajas tiene sobre los sistemas de construcción más populares como gulp y por que deberíamos interesarnos por esta gran herramienta.

# Que es Webpack?

Webpack es un empaquetador de módulos que permite trabajar de manera  modular nuestras aplicaciones, basado en la estructura **Commonjs y AMD **nos permite manejar dependencias y tener un código más escalable. Aquí una lista de funciones para que lo entiendas mejor:

- uso de dependencias en tu aplicación mediante npm (dependency managment)

- uso de preprocesadores tipo jade, stylus, coffeescript, etc (loaders)

- permite modularizar de manera mas eficiente tu código (code splitting)

- fácil integración para hacer testing a tu código (unitesting)

- dependencias encapsuladas y no duplicadas (dedupePlugin)

- minificación y optimización de recursos (optimize)

Aun no claro? un ejemplo para que lo veas mejor:

<blockquote>aqui creo mi componente en un archivo separado

![](http://i.imgur.com/kIzKsoi.png)

y aqui lo importo

![](http://i.imgur.com/zVKPiOT.png)</blockquote>

Webpack se puede ejecutar desde el terminal con el comando global webpack o desde un archivo de configuración llamado webpack.config.js.

Trae consigo opciones muy interesantes que nos permitirán optimizar nuestro workflow al máximo:

- **Cargadores (loaders)**

- **Plugins**

#### Loaders:

los cargadores son tareas que permiten modificar o transformar un archivo definiendo 2 propiedades como mínimo la primera es una **expresión regular** para definir el formato del archivo y el segundo la tarea o las tareas que desee ejecutar de manera secuencial **en orden de izquierda a derecha**. Un ejemplo que podemos ver de esto, seria:
`{ test: /\.styl$/, loader: 'css-loader!stylus-loader' }`
en el ejemplo podemos ver la propiedad **test y loader** donde test acepta un Regex (notese el signo del dolar \$ al final) y loader acepta un string donde la primera tarea es stylus-loader y la segunda tarea es css-loader cada tarea es separada por un signo de admiración. Tambien podemos resumir esto '\*\*css-loader!stylus-loader\*\*' por '\*\*css!stylus\*\*' no es necesario el \*\*-loader. \*\*Otra forma de ejecutar tareas es pasarle un arreglo, para esto necesitamos cambiar la propiedad\*\* loader \*\*por\*\* loaders,\*\* un ejemplo de esto seria:
`{ test: /\.styl$/, loaders: ['css-loader', 'stylus-loader'] }`
los loaders son tareas programadas por la comunidad de webpack, usted puede crear una tarea en particular para su flujo de trabajo. Para mas detalles revisar la [documentación](http://webpack.github.io/docs/loaders.html) oficial de cargadores.

#### Plugins:

Los plugins se incluyen en tu configuración mediante la propiedad plugins donde este acepta una arreglo como valor, un ejemplo de esto seria así :
`{ plugins:[ new webpack.optimize.DedupePlugin(), new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false, }, }) ]`
}

existe una gran lista de plugins que puedes usar, para mas información visita la[ documentación](http://webpack.github.io/docs/list-of-plugins.html) oficial.

#### Instalación

como bien sabemos webpack es un paquete de npm y funciona con nodejs asi que la instrucción para instalar es:
`npm install -g webpack`
uso basico:
`// webpack <entry> <output> webpack ./app.js ./bundle.js`
usando el watcher de webpack:
`webpack ./app.js ./bundle.js -w`

## zzZZ

Detras de webpack existe una gran comunidad activa que está revolucionando la forma de trabajar y automatizar tareas para el desarrollo avanzado no solo del frontend si no de cualquier tipo de desarrollador.
