---
author: jansanchez
comments: true
date: 2015-02-19 18:15:15+00:00
layout: post
link: https://frontendlabs.io/2166--npm-como-crear-modulos-nodejs-publicar-npmjs
slug: npm-como-crear-modulos-nodejs-publicar-npmjs
title: Cómo crear módulos node.js y publicarlos en NPM?
wordpress_id: 2166
categories:
- Javascript
tags:
- Javascript
- Nodejs
- npm
---





## Objetivo de este artículo


El objetivo de este artículo es aprender a publicar un módulo o paquete Node.js en [NPM](https://www.npmjs.com/).
Para llevar esto a cabo, he creado un pequeño módulo Node.js para poder registrar y subir a NPM.

Antes de empezar veremos unos cuantos conceptos básicos:



## ¿Qué es NPM?


**NPM es el administrador de módulos para Node.js.** Fue creado el 2009 como un proyecto open source para ayudar a los desarrolladores Javascript a compartir fácilmente sus módulos en Node.js.

El registro de NPM es una colección de módulos open source para Node.js, front-end web apps, mobile apps, robots, routers, y un sinnúmero de otras necesidades de la comunidad JavaScript.

NPM cuenta con un cliente de línea de comandos que permite a los desarrolladores instalar y publicar estos módulos.

**Npm, Inc.** es la compañía que aloja y mantiene todo lo registrado en NPM.



## ¿Qué es un módulo o paquete en Node.js?


Un módulo en Node.js es simplemente una unidad de código relacionado con un único fin.

Un módulo puede estar compuesto por 1 o más archivos, Node.js tiene un sistema simple de carga de módulos, En Node.js, los archivos y los módulos tienen una correspondencia de uno a uno, Un módulo puede depender de uno o más módulos de Node.js.

Existen 2 tipos de módulos: los **módulos principales(Core modules)** y los **módulos de archivo(File modules)**.


### Módulos principales


Los módulos principales(nativos) son definidos en el código fuente de node en la carpeta lib/ y tienen la preferencia de carga frente a cualquier otro módulo.


### Módulos de archivo


Los módulos de archivo son módulos definidos por el usuario(como el que usaremos en este artículo) y por lo general se registran en NPM para su uso.



## Conceptos básicos de un módulo de archivo en Node.js



Primero, definiremos una estructura de trabajo para nuestro módulo npm(lo llamaremos: mydependencies), existe un estándar para organizarlo pero como yo trabajo con coffee-script prefiero modificar un poco la estructura para acomodarla más a mis necesidades, así que la estructura que me queda es la siguiente:


    
    
    <code>mydependencies/
                    bin/
                    source/
                    dist/
                    test/
                    .npmignore
                    package.json
                    README.md
    </code>
    





#### Donde:



La carpeta bin/: Es la que contendrá las funciones con las que se podrá ejecutar nuestro módulo en la línea de comandos.

La carpeta source/: Es la que contendrá nuestro código fuente(en nuestro caso aquí irá todo nuestro código fuente en coffee-script).

La carpeta dist/: Es la que contendrá nuestro código Javascript final(el resultado de la compilación del código fuente en coffee-script).

La carpeta test/: Es la que contendrá el código Javascript final de las pruebas unitarias que tenga nuestro módulo(no son obligatorias, pero es una buena práctica).

El archivo .npmignore: Este archivo es necesario para que NPM sepa que archivos de nuestro repositorio ignorar al instalar y descargar nuestro módulo en una máquina(ordenador) cliente.

El archivo package.json: Este archivo es necesario para que NPM sepa toda la información relevante de nuestro proyecto. 
Por ejemplo: nombre, versión, script principal, scripts secundarios, ruta principal de acceso mediante terminal(bin), autor, tipo de licencia, dependencias, dependencias de desarrollo y mucho más.

El archivo README.md: Este es un archivo con extensión .md( [](http://es.wikipedia.org/wiki/Markdown)Markdown), por defecto es el archivo llamado por NPM para mostrar un resumen y/o instrucciones de instalación de nuestro módulo o paquete Node.js.

En esta parte es donde desarrollamos nuestro módulo, codeamos y realizamos la funcionalidad y probamos que todo vaya bien(espero realizar un artículo para profundizar la creación de un módulo en Node.js).

Para este caso preparé con anterioridad un módulo que esta listo para subir a NPM, se encuentra en github y la url es la siguiente: [https://github.com/jansanchez/mydependencies](https://github.com/jansanchez/mydependencies). 



## Registrar nuestro módulo en NPM



Una vez que tengamos terminada toda la codificación de nuestro módulo, hayamos probado que funciona y estemos seguros de subirlo a NPM, entonces hacemos lo siguiente:

Abrimos nuestro terminal y escribimos lo siguiente:


    
    
    <code>
    npm adduser
    </code>
    



Con esta instrucción lo que hacemos es registrar o validar nuestro usuario en NPM, primero ingresamos el nombre de usuario que deseamos tener.

![npm adduser](https://frontendlabs.io/wp-content/uploads/2015/02/npm-adduser.png)

A continuación escogemos e ingresamos una contraseña.

![npm adduser password](https://frontendlabs.io/wp-content/uploads/2015/02/npm-adduser-password1.png)

A continuación ingresamos nuestro correo electrónico.

![npm adduser email](https://frontendlabs.io/wp-content/uploads/2015/02/npm-adduser-email.png)

NPM validará nuestros datos y si todo va bien nos registraremos con éxito, tal como se ve en la siguiente vista.

![npm adduser success](https://frontendlabs.io/wp-content/uploads/2015/02/npm-adduser-success1.png)



## Publicar nuestro módulo en NPM



Ya estamos registrados en NPM, ahora debemos publicar nuestro módulo así que nos dirigimos e ingresamos a la carpeta de nuestro proyecto, en mi caso es la carpeta mydependencies/.

![npm module mydependencies](https://frontendlabs.io/wp-content/uploads/2015/02/npm-module-mydependencies.png)

Ahora nos aseguramos que nuestro package.json tenga un numero de versión válida para NPM, para lo cual simplemente abrimos nuestro archivo package.json y verificamos que tenga una [versión válida](http://semver.org/lang/es/).

![version in package.json](https://frontendlabs.io/wp-content/uploads/2015/02/package.json_.png)

Como podemos apreciar la versión de nuestro módulo es: 1.0.5, así que podemos publicar sin ningún problema, entonces manos a la obra.

Escribimos lo siguiente:


    
    
    <code>
    npm publish
    </code>
    



Si todo va bien nos saldrá un mensaje como el siguiente:


    
    
    <code>
    + mydependencies@1.0.5
    </code>
    



Lo cual quiere decir que hemos publicado con éxito el módulo mydependencies en su versión 1.0.5, con lo cual ya podemos verlo publicado en la web de [NPM](https://www.npmjs.com/package/mydependencies).

Si deseas modificar tu módulo, derrepente agregarle funcionalidades o quitárselas y deseas volver a publicarlo entonces debes modificar la versión del módulo en tu archivo package.json.

Por ejemplo para nuestro caso cambiaría la versión 1.0.5 por la versión 1.0.6 y luego publicaría mi módulo nuevamente con npm publish.

Saber crear y publicar un módulo Node.js es muy importante, ya que podrías resolver un problema, innovar, crear un programa con un nuevo paradigma, automatizar procesos, crear un lenguaje preprocesador, crear plugins para grunt, gulp, [etc](https://www.npmjs.com/~jansanchez).

Si te quedaste con ganas de crear tu propio módulo con Node.js y no sabes como hacerlo puedes revisar el [código fuente](https://github.com/jansanchez/mydependencies) del módulo de ejemplo que hice para este artículo e ir analizando como funciona(yo aprendí así revisando el módulo de Jade).

Así hemos llegado al final del artículo y ahora ya sabemos como se publica un módulo en NPM, recuerda que tú también puedes hacerlo!.
