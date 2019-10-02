---
author: jansanchez
comments: true
date: 2016-10-19 05:27:49+00:00
layout: post
link: https://frontendlabs.io/3501--react-js-demo-basica-talleres-web
slug: react-js-demo-basica-talleres-web
title: Talleres Web React JS - Taller 1 - Demo básica con React JS
wordpress_id: 3501
categories:
  - Javascript
tags:
  - es6
  - Javascript
  - React js
---

En este artículo realizaremos una demo básica con React JS, y trataremos de explicar cada paso a detalle, para así poder entender la mayoría de conceptos que giran en torno al desarrollo de una Aplicación con React JS.

Para esta demo básica usaremos 3 conceptos principales, los cuales son:

- React JS

- Babel JS

- Webpack

## ¿Qué es React JS?

Según sus autores React JS fue construido con un objetivo principal: **Que la construcción y mantenimiento de grandes aplicaciones con datos que cambian con el tiempo, sea lo más sencilla posible**.

React JS, _es una librería Javascript_, cuyo enfoque principal se centra en la gestión de interfaces de usuario (vistas). React JS gestionará automáticamente las actualizaciones de la interfaz de usuario cuando detecte cambios en los datos internos que tendrá cada componente de la vista. Cuando los datos cambian, **React JS actualiza únicamente las partes que han cambiado**, es casi mágico y muy bueno para el performance de la aplicación, no necesita mapear, ni hacer cambios en todo el DOM innecesariamente.

Por favor no confundamos React JS con un framework.

### ¿Qué es un componente en React JS?

Cuando se diseñan interfaces, se acostumbra descomponer los elementos de diseño comunes (secciones, botones, campos de formulario, etc.) en componentes reutilizables con interfaces bien definidas. React JS utiliza este concepto teórico para sus componentes, por lo cual un componente puede ser cualquier elemento de nuestra interfaz de usuario.

React JS está enteramente pensado para la construcción de **componentes reutilizables**. De hecho, con React JS prácticamente lo único que se hace es construir y gestionar componentes.

Debido a que los componentes en React JS están tan encapsulados, hacen que la reutilización de código, pruebas y separación de las responsabilidades sea una tarea más fácil.

El requisito principal es que un componente React JS debe sobreescribir el metodo render(), ya que cuando el componente se inicializa el método render se llama automaticamente, y este genera una representación lógica de la vista. Desde esa representación lógica React JS puede formar una cadena de marcado (markup), e inyectarla en el DOM.

Cuando los datos cambian, el método render se llama de nuevo, React JS compara el valor devuelto anteriormente con el nuevo, de esa comparación obtiene un conjunto mínimo de cambios que se aplicarán en el DOM, obviamente esta actualización es mucho más eficiente.

Los componentes son el corazón de React JS, en estas demos nos la pasaremos creando, administrando y conociendo en profundidad los componentes en React JS.

### ¿Qué es JSX?

JSX es una extensión de la sintaxis de JavaScript, tiene una apariencia similar a XML, la cual es similar a nuestra muy conocida sintaxis HTML, por lo cual se nos hará rápidamente muy familiar.

XML tiene el beneficio de las etiquetas de apertura y cierre. Esto hace que las estructuras de árboles grandes sean más fáciles de leer que las funciones o objetos literales Javascript.

No es estrictamente necesario utilizar JSX con React. También se puede utilizar Javascript puro para realizar esta tarea. Sin embargo, se recomienda utilizar JSX porque es una sintaxis concisa y familiar para la definición de estructuras de árbol y sus atributos.

De momento para esta demo básica eso es todo lo que necesitamos saber sobre React JS, en los próximos artículos iremos profundizando más y más en los conceptos de React JS.

## ¿Qué es Babel JS?

Babel es un compilador multipropósito para Javascript. Usando Babel podemos codear en la nueva versión del estándar ECMAScript hoy mismo, sí, hoy mismo!.

Javascript es un lenguaje en constante evolución, con nuevas propuestas, especificaciones y nuevas funcionalidades todo el tiempo. Babel nos permitirá usar muchas de estas características antes de que estén disponibles en todos lados.

Lo que hace Babel es tomar el código Javascript escrito con los últimos estándares y compilarlo a su versión en ES5. Este proceso es llamado **compilación source-to-source**, mayormente conocido como transpiling.

Babel cuenta con plugins y listas prestablecidas de plugins para ES2015 y React JS.

### ¿Qué es ECMAScript 2015 (ES2015)?

ECMAScript 2015 es la nueva versión del estándar ECMAScript, y como bien sabemos Javascript está basado en este estándar. Esta norma fue ratificada en junio de 2015. ES2015 es una importante actualización de este estándar, y es la primera actualización importante desde la ES5, la cual fue estandarizada por el año 2009, es decir **hace más de 7 años**.

Las características de ES2015 están siendo implementadas en Node.JS y poco a poco [en la mayoría de navegadores actuales](http://kangax.github.io/compat-table/es6/), debido a esto usaremos ES2015 para codear todas las demos con React JS.

## ¿Qué es Webpack?

Webpack es un enpaquetador de módulos, toma módulos que por lo general tienen dependencias y genera archivos estáticos correspondientes a dichos módulos.

Webpack recoge y procesa una variedad de recursos web y los embala en un paquete que se puede servir de lado cliente. A pesar de que esto suena simple, en realidad es un problema difícil que se vuelve más complejo cuando una aplicación web crece.

Debido a que React JS utiliza componentes como si fuesen bloques de construcción para aplicaciones cada vez más grandes y Webpack trabaja muy bien con ese concepto, lo usaremos en nuestras demos, además Webpack le da superpoderes a los **require** e **import**s de Node.JS, esto lo vuelve mucho más genial.

Además de Webpack también podríamos usar [Browserify](http://browserify.org/), [jspm](http://jspm.io/) u otras herramientas para realizar el trabajo con React JS, pero para estos talleres escogí Webpack ya que me gustó mucho trabajar con su **dev-server**, veamos de que trata en el siguiente concepto.

### ¿Qué es webpack-dev-server?

Webpack-dev-server es un pequeño servidor express, que utiliza _webpack-dev-middleware_ para servir un paquete construído con Webpack. El servidor emite información sobre el estado de compilación hacia el cliente mediante Socket.IO, y el cliente reacciona a esos eventos.

Hay varios modos de cómo trabajar con webpack-dev-server, pero para nuestro caso usaremos estos eventos para recargar sólo los componentes que se hayan actualizado, de esa forma podremos agilizar más nuestro desarrollo.

### ¿Qué es un Webpack loader?

Los loaders son transformaciones que se aplican en un archivo fuente. Son funciones (que se ejecutan en Node.JS) que toman el código fuente de un archivo como parámetro y retornan ese código fuente aplicandole alguna transformación.

Para nuestra demo utilizaremos babel-loader, que es un plugin de Webpack para transpilar archivos Javascript. Y lo haremos mediante las **presets** de Babel, también conocidas como **listas preestablecidas de plugins**. Para nuestro caso usaremos la lista de plugins para `es2015` y `react`.

Conociendo estos conceptos básicos ya podemos comenzar a hacer nuestra demo, así que pongamos manos a la obra!.

## Pre-requisitos

Antes de comenzar necesitamos tener instalado [Node.JS](http://frontendlabs.io/232--como-instalar-node-js-debian-linux) en su versión 4.4.4 como mínimo, recuerden que a fin de este año se le [dejará de dar mantenimiento a la versión 0.12 de Node.JS](https://github.com/nodejs/LTS#lts_schedule), por lo cual les recomiendo ir migrando de versión.

<blockquote>Si deseas tener instalada la versión 4.4.4 o una versión mayor sólo para estás demos, no te preocupes para eso existe un gran paquete Node.JS llamado n, el cual soluciona esta situación de una manera genial, pero eso te explicamos en [nuestro artículo sobre n](http://frontendlabs.io/3397--node-js-como-trabajar-multiples-versiones-de-node-version-manager).</blockquote>

Además necesitamos que nuestro editor de texto reconozca la sintaxis `.jsx` y `ES2015`, así que dependiendo de tu editor deberás realizar la instalación de esos paquetes o plugins.

Resuelto esto ahora sí pasamos a crear el proyecto desde cero e instalar las dependencias y dependencias de desarrollo que necesitaremos.

## Iniciando el proyecto

Creamos nuestra carpeta para el primer taller web de React JS e ingresamos a ella.

    <code>
    mkdir taller-react-1 && cd taller-react-1
    </code>

Luego daremos por iniciado nuestro proyecto creando interactivamente nuestro archivo `package.json`, con la siguiente instrucción:

    <code>
    npm init --force
    </code>

<blockquote>Mediante la instrucción `npm init --force` o `npm init -f` evitamos todas las preguntas incomodas de `npm init`.</blockquote>

### Instalación de dependencias

Primero instalamos las dependencias principales de nuestro proyecto, las cuales son: `react` y `react-dom`:

    <code>npm i -S react react-dom
    </code>

<blockquote>Mediante la instrucción `npm i -S` podemos instalar las dependencias de nuestro proyecto, esto hará que dentro de nuestro archivo package.json se agregue la llave `dependencies` y allí se almacenen las dependencias principales de nuestro proyecto.</blockquote>

### Instalación de dependencias de desarrollo

Luego instalamos las dependencias de desarrollo que usaremos para Webpack

    <code>npm i -SD webpack webpack-dev-server
    </code>

Luego instalamos las dependencias de desarrollo que usaremos para Babel JS

    <code>npm i -SD babel-loader babel-preset-es2015 babel-preset-react
    </code>

<blockquote>Mediante la instrucción `npm i -SD` podemos instalar las dependencias de desarrollo de nuestro proyecto, esto hará que dentro de nuestro archivo package.json se agregue la llave `devDependencies` y allí se almacenen las dependencias de desarrollo de nuestro proyecto.</blockquote>

Con esto hemos instalado todas las dependencias de nuestro proyecto, ahora sí comenzemos a desarrollar nuestro primer taller!.

## Taller React JS 1

Para nuestro primer taller simplemente crearemos un componente llamado `Header`, el cuál contendrá una etiqueta `<h1>`con un título dinámico, mediante el título dinámico veremos como funcionan las `props` de los componentes en React JS.

Inicialmente para realizar esta demo escribiremos los siguientes archivos:

- public/index.html

- app/TallerReact1.jsx

- app/components/Header.jsx

### public/index.html

En el archivo **index.html** escribiremos un nuevo documento html muy simple, en el cual agregaremos un div con el id:`divTallerReact1`, dentro de este div es donde React JS renderizará nuestra Aplicación. Además agregaremos la llamada al `script`: **tallerReact1.js**, en este archivo estará todo el código necesario para la ejecución de nuestra Aplicación.

Nuestro archivo **index.html** debería quedar así:

    <code><!DOCTYPE html>
    <<span class="pl-ent">html</span>>
      <<span class="pl-ent">head</span>>
        <<span class="pl-ent">meta</span> <span class="pl-e">charset</span>=<span class="pl-s"><span class="pl-pds">"</span>UTF-8<span class="pl-pds">"</span></span> />
        <<span class="pl-ent">title</span>>tallerReact1</<span class="pl-ent">title</span>>
      </<span class="pl-ent">head</span>>
      <<span class="pl-ent">body</span>>
          <<span class="pl-ent">div</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>divTallerReact1<span class="pl-pds">"</span></span>></<span class="pl-ent">div</span>>
    <span class="pl-s1">    <<span class="pl-ent">script</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>text/javascript<span class="pl-pds">"</span></span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>tallerReact1.js<span class="pl-pds">"</span></span>></<span class="pl-ent">script</span>></span>
      </<span class="pl-ent">body</span>>
    </<span class="pl-ent">html</span>></code>

### app/components/Header.jsx

Luego crearemos el archivo **app/components/Header.jsx** en el cual declararemos la clase `Header`, que como podemos observar hereda todo lo que ofrece la clase `React.Component`, mediante la palabra clave `extends`.

Luego sobreescribiremos el método `render()`, insertando el contenido de nuestro componente. Para este ejemplo de componente retornaremos un `div` conteniendo una etiqueta `<h1>`, dentro del cual escribiremos `{this.props.title}`para mostrar el valor de la propiedad `title` de nuestro componente. Finalmente exportamos nuestro componente`Header` mediante `export default class Header`. `` De esta manera nuestro nuevo componente`Header` podrá ser**utilizado/llamado** de forma independiente por cualquier otro componente o aplicación.

Nuestro archivo **Header.jsx** debería quedar así:

    <code><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

    <span class="pl-k">export default</span> <span class="pl-k">class</span> <span class="pl-en">Header</span> <span class="pl-k">extends</span> <span class="pl-en">React</span><span class="pl-k">.</span><span class="pl-smi">Component</span> {
        <span class="pl-en">render</span>() {
    <span class="pl-k">      return</span> (
            <<span class="pl-ent">div</span>>
              <<span class="pl-ent">h1</span>><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-v">this</span><span class="pl-k">.</span><span class="pl-smi">props</span><span class="pl-k">.</span><span class="pl-smi">title</span></span><span class="pl-pse">}</span></<span class="pl-ent">h1</span>>
            </<span class="pl-ent">div</span>>
          );
        }
    }</code>

### app/TallerReact1.jsx

Creamos el archivo: **app/TallerReact1.jsx**, en donde importamos `react`, `react-dom` y nuestro componente anteriormente creado `Header`.

Declaramos la constante `header`, que contendrá una instancia de nuestro componente `Header` y además asignandole a su propiedad **title** el valor: _'Taller Web React JS'_.

Luego definimos la constante `nodoContenedor` que será el nodo html que contendrá nuestro componente, que para este caso es un div con el id: `divTallerReact1`.

Luego definimos la _función_ `renderizacion`, en la cual simplemente renderizaremos la instancia de nuestro componente`Header`, dentro del `nodoContenedor` de nuestra Aplicación, mediante el método `render()` de ReactDOM.

Finalmente ejecutamos la _función_ `renderizacion`.

Nuestro archivo **TallerReact1.jsx** debería quedar así:

    <code><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
    <span class="pl-k">import</span><span class="pl-smi"> ReactDOM</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-dom<span class="pl-pds">'</span></span>;

    <span class="pl-k">import</span><span class="pl-smi"> Header</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./components/Header<span class="pl-pds">'</span></span>;

    <span class="pl-k">const</span> <span class="pl-smi">header</span><span class="pl-k"> =</span> <<span class="pl-ent"><span class="pl-c1">Header</span></span> <span class="pl-e">title</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>Taller Web React JS<span class="pl-pds">"</span></span> />;
    <span class="pl-k">const</span> <span class="pl-smi">nodoContenedor</span><span class="pl-k"> =</span><span class="pl-c1"> document</span><span class="pl-k">.</span><span class="pl-en">getElementById</span>(<span class="pl-s"><span class="pl-pds">'</span>divTallerReact1<span class="pl-pds">'</span></span>);

    <span class="pl-k">const</span> <span class="pl-smi">renderizacion</span><span class="pl-k"> =</span> () <span class="pl-k">=></span> {
      <span class="pl-smi">ReactDOM</span><span class="pl-k">.</span><span class="pl-en">render</span>(<span class="pl-smi">header</span>,<span class="pl-smi"> nodoContenedor</span>);
    }

    <span class="pl-en">renderizacion</span>();

`

<blockquote>**Nota:** Dentro del componente el valor de la propiedad **title** puede ser capturado mediante la siguiente instrucción:`{this.prop.title}`.</blockquote>

El archivo: **app/TallerReact1.jsx**, será el punto de inicio de nuestra aplicación de ejemplo, pero como sabemos el navegador no reconocerá la extensión **.jsx**, ni la versión ES2015 de Javascript, por lo cual necesitamos convertirlo en un archivo **.js** basado en ES5, para eso utilizaremos webpack y babel.

### webpack.config.js

    <code>
    var path = require('path');
    var ROOT_PATH = path.resolve(__dirname);
    var BUILD_PATH = path.join(ROOT_PATH, '/public/static/js/');

    module.exports = {
      entry: {
        tallerReact1: ['webpack/hot/dev-server', './app/TallerReact1']
      },
      output: {
        path: BUILD_PATH,
        filename: '[name].js',
        chunkFilename: '[id].js'
      },
      resolve: {
        extensions: ['', '.jsx', '.js']
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
      }
    };
    </code>

### package.json

    <code>
    {
      "name": "taller-react-1",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "server": "webpack-dev-server --inline --hot --content-base ./public/",
        "build": "webpack -w -p"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "dependencies": {
        "react": "^15.1.0",
        "react-dom": "^15.1.0"
      },
      "devDependencies": {
        "babel-loader": "^6.2.4",
        "babel-preset-es2015": "^6.9.0",
        "babel-preset-react": "^6.5.0",
        "webpack": "^1.13.1",
        "webpack-dev-server": "^1.14.1"
      }
    }
    </code>

La idea principal es formar una comunidad Online de React JS en español, y que ustedes participen comentando mejoras, dudas o partes que no les queden claras para poder ir fortaleciendo el artículo y las demos básicas, de esta forma podremos formar entre todos un artículo contundente, que nos ayude a todos a entender React JS de la mejor forma, esto quiere decir que este artículo irá cambiando y mejorando en base a sus aportes, si desean también pueden comentar en twitter con el hastag [#TalleresWebReactJS](https://twitter.com/hashtag/TalleresWebReactJS).
