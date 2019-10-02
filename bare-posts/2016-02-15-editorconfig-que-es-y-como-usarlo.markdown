---
author: elizabeth-manrique
comments: true
date: 2016-02-15 19:15:54+00:00
layout: post
link: https://frontendlabs.io/3311--editorconfig-que-es-y-como-usarlo
slug: editorconfig-que-es-y-como-usarlo
title: "EditorConfig: ¿Qué es y cómo usarlo?"
wordpress_id: 3311
categories:
  - Automatización
  - Código
  - Estilos de código
tags:
  - editorconfig
  - estilos de código
---

A menudo un proyecto, dependiendo de su complejidad, es programado por más de un desarrollador, es entonces muy normal encontrarse con la situación en la que un "programador Addy" tendrá que modificar el archivo "X" que creó un "programador Paul". Por buenas prácticas, **antes de que el "programador Addy" empiece el cambio** en el archivo "X", debe considerar **los estándares que el "programador Paul" definió, **esto ayudará a poder evitar futuros conflictos en la forma de trabajo de los archivos y como consecuencia, ayudar a que el **proyecto sea más mantenible.**

Parte de los estándares de programación son los estilos de código, que no son nada más que la estandarización de los formatos de los archivos. Por ejemplo:

** ¿Usamos espacios o tabs? ¿Cuál será el ancho de cada tab? ¿Permitimos los espacios en blanco al final de cada línea?**

![editorconfig tabs-or-spaces](https://frontendlabs.io/wp-content/uploads/2016/02/editorconfig-tab-or-spaces.png)

## Automatizando

Definir los estilos de código nos ayudará mucho como equipo para trabajar bajo estandares, podríamos tener estilos de código muy generales como por ejemplo: Usar tabs para las indentaciones de todos los archivos o muy especificos como usar 4 columnas de indentación solo para los archivos HTML, pero aplicarlos manualmente será un dolor de cabeza constante porque tocará revisar constantemente que estilos debemos aplicar a cada archivo y mantener informado al equipo para que lo apliquen en sus respectivos IDE's.

¡Pero calma! Para eso existe EditorConfig, para ayudarnos a automatizar y centralizar los estilos de código, usarlo es tan sencillo como instalar el plugin respectivo a nuestro IDE y agregar a nuestro proyecto un archivo .editorconfig con todos los estilos de códigos que necesitemos.

![editorconfig editorconfig-logo](https://frontendlabs.io/wp-content/uploads/2016/02/editorconfig-logo1.png)

## Estilos de código más usados

Editorconfig nos ofrece [una lista variada de estilos que se puede aplicar, ](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties)(algunos no son compatibles con ciertos IDES) los más importante y usados son:

- **Estilo de identación (indent_style): **Tabs o espacios.

- **Ancho de indentación (indent_size): **Número de columnas por indentación.

- **Final de línea (end_of_line): **Control de salto de linea (LF, CR, CRLF).

- **Charset (charset): **Control del charset

- **Recortar espacios en blanco (trim_trailing_whitespace): Eliminar **cualquier espacio en blanco precedido por una nueva linea.

- **Insertar nueva línea al final del archivo (new_line_final): Insertar **un nueva línea al final del archivo esta es una [práctica muy recomendada](http://stackoverflow.com/questions/729692/why-should-text-files-end-with-a-newline)).

Puedes clonar este [repositorio ](https://github.com/emanrique/editorconfig_speak)para ver un ejemplo del uso de EditorConfig (no olvides darle una estrellita).

## Utilizando EditorConfig

Para empezar a utilizar EditorConfig debemos seguir los siguientes pasos:

1. Lo primero que debemos hacer como lo mencioné antes, es [instalar el plugin de Editorconfig en nuestro IDE .](http://editorconfig.org/#download)

Nota: Algunos IDEs ya vienen con el soporte integrado.

2. Creamos en la raíz de nuestro proyecto el archivo .editorconfig![editorconfig editorconfig-ile](https://frontendlabs.io/wp-content/uploads/2016/02/editorconfig-file.png)

3) Definimos los estilos de código, podríamos tener estilos de código generales o específicos.![editorconfig editorconfig-example](https://frontendlabs.io/wp-content/uploads/2016/02/example-editorconfig.png)

Podemos tener tantos archivos .editorconfig como deseemos por carpeta dentro de un proyecto, pero solo el principal debe tener la propiedad root=true.

¡Y listo! Con esto cada vez que trabajemos con un archivo, Editorconfig se encargará de **aplicar automáticamente los estilos de código **y no importará el IDE con el que trabajemos mientras tengamos el plugin instalado, todos podremos utilizar el mismo estilo de código.

<blockquote>EditorConfig solo aplicará el formato que hayamos definido siempre y cuando se abra y guarde el archivo.</blockquote>

## Migrando

Hasta ahora hemos entendido el papel fundamental que tiene EditorConfig al momento de estandarizar y el tiempo que nos va a ahorrar definiendo en un solo archivo de estilos que funcione en cualquier IDE, pero
** ¿Qué pasa si ya tenemos un proyecto avanzado y queremos aplicarlo? **

Una idea poco práctica sería abrir y cerrar todos los archivos para que Editorconfig los formateé. Pero una vez más podemos automatizar este proceso, utilizando alguna herramienta que nos permita refactorizar nuestros archivos en base a nuestro archivo editorconfig. Podemos utilizar entonces por ejemplo un **npm **que nos ayude a hacer el formateo de manera automática, un paquete bastante utilizado es **editorconfig-tools. **Lo primero que debemos hacer es instalar de forma global el paquete:

                        <code>npm install -g editorconfig-tools</code>

Y luego ejecutar el comando editorconfig-tools para que formatee los archivos en el proyecto que deseemos aplicarlo. A modo de ejemplo cree un proyecto en el mismo repo llamado unformat-project que contiene archivos que no están formateados y poder testearlo.

Recomiendo utilizar cualquier sistema de control de versiones antes de ejecutar cualquier comando.

Lo que tendríamos que hacer es ejecutar el siguiente comando en el folder
unformat-project :

                        <code>editorconfig-tools fix **/*</code>

Si todo funcionó bien deberíamos tener una la siguiente salida en la consola:

![editorconfig editorconfig-tools](https://frontendlabs.io/wp-content/uploads/2016/02/editorconfig-tools-output.png)

Finalmente veremos que todo los archivos del proyecto han sido formateado según las especificaciones de su archivo .editorconfig

Como podemos ver no hay excusa para no usar EditorConfig, su uso es tan importante para el proceso de estandarización que es necesario considerarlo desde el instante que el proyecto es creado. Si tienes alguna duda puedes hacérmela llegar por los comentarios o escribiendome en twitter a @frontend_3. Te invito también a revisar la versión diapositiva de este post y convencer a tu equipo de lo necesario que es usar Editorconfig (Y si te gusta no olvides darle una estrellita y compartir este post). Gracias por tu tiempo.

## Referencias Bibliográficas

Documentación oficial de EditorConfig.
[http://editorconfig.org/](http://editorconfig.org/)

TREY HUMMER. EditorConfig.
[ https://treyhunner.com/editorconfig-slides/](https://treyhunner.com/editorconfig-slides/)
