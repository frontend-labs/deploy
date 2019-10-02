---
author: jansanchez
comments: true
date: 2015-03-14 16:40:17+00:00
layout: post
link: https://frontendlabs.io/2428--clonar-un-repositorio-git-en-pocos-segundos
slug: clonar-un-repositorio-git-en-pocos-segundos
title: ¿Cómo clonar un repositorio git en pocos segundos?
wordpress_id: 2428
categories:
  - Git
---

## El escenario

Cuando trabajamos con Git en proyectos de desarrollo muy grandes y tal vez algo antiguos, puede que se nos presente el inconveniente de que al desear clonar nuestro repositorio, Git nos indiqué que va demorar mucho tiempo en clonar, al decir mucho tiempo me refiero a más de 20 minutos por lo cual a continuación les presento una técnica para clonar repositorios muy grandes en unos cuantos segundos.

## La solución teórica

Para llevar esto a cabo crearemos un repositorio git de tipo bare y pondremos (mediante un push) sólo el historial de nuestro código en él.

Una vez tengamos el repositorio bare listo, procedemos a clonar el proyecto en nuestro directorio de trabajo.

Como paso final cambiaremos la url remota del proyecto para que apunte hacia la url de nuestro repositorio principal y listo, eso es todo.

## ¿Qué es un repositorio bare?

Un repositorio git de tipo bare contiene sólo la carpeta .git y no hay copias del código fuente. En resumen un repositorio bare contiene estríctamente el historial de versiones de nuestro código, he allí gran parte del secreto, así que manos a la obra!.

## ¿Cómo crear un repositorio bare?

Primero crearemos el repositorio bare.
Para esto creamos la carpeta donde alojaremos nuestro repositorio bare e ingresamos.

    <code>
    mkdir ~/data/repositorios-bare && cd ~/data/repositorios-bare
    </code>

Una vez dentro crearemos el repositorio git bare, con la siguiente instrucción:

    <code>
    git init --bare nombre_de_tu_proyecto.git
    </code>

En mi caso, como mi proyecto se llama flux, entonces escribiré lo siguiente:

    <code>
    git init --bare flux.git
    </code>

Si todo salió bien, git nos dará el siguiente mensaje:

    <code>
    Initialized empty Git repository in /home/jan/data/repositorios-bare/flux.git/
    </code>

Lo cual quiere decir que Git inicializó un repositorio vacío (bare) en esa nueva ruta, observen que la carpeta termina con la extension .git y recuerden bien esa ruta porque es importante.

## Poniendo todo el historial de nuestro proyecto en el repositorio bare

Ahora nos dirigiremos a la carpeta de nuestro proyecto actual (el que queremos clonar), digamos que estamos trabajando en el proyecto flux, entonces ingresamos al proyecto, en mi caso esta sería la instrucción.

    <code>
    cd /home/jan/htdocs/flux
    </code>

## ¿Cómo hallo la url del origen remoto de mi repositorio git?

Ahora debemos averiguar algo muy importante, ¿Cual es la url de nuestro origen remoto?, para eso escribimos la siguiente instrucción, copiamos y pegamos la ruta resultante en algun block de notas o algo así, ya que necesitaremos esta ruta más adelante.

    <code>
    git config --get remote.origin.url
    </code>

En mi caso me muestra la siguiente url remota:

    <code>
    https://github.com/jansanchez/flux.git
    </code>

Y ahora agregamos a nuestro repositorio un "origen remoto" llamado "vacio" y le indicamos que la ruta de este repositorio es el de nuestro nuevo repositorio bare, así:

    <code>
    git remote add vacio /home/jan/data/repositorios-bare/flux.git/
    </code>

y luego ponemos todo el historial dentro de nuestro repositorio bare, llamado "vacio":

    <code>
    git push vacio --all
    </code>

Git nos dará el siguiente mensaje, indicándonos que comprimió todos los objetos git(historial git de nuestro proyecto) y que lo guardó en el repositorio bare, llamado "vacio":

    <code>
    Counting objects: 910, done.
    Delta compression using up to 4 threads.
    Compressing objects: 100% (499/499), done.
    Writing objects: 100% (910/910), 2.06 MiB, done.
    Total 910 (delta 304), reused 907 (delta 303)
    To /home/jan/data/repositorios-bare/flux.git/
    	* [new branch]      master -> master
    </code>

## Clonando el proyecto desde nuestro repositorio bare

Ahora nuestro repositorio bare ya no esta vacío, sino que ya contiene todo el historial de nuestro trabajo y ya podemos clonar el proyecto en unos cuantos segundos.

Así que si deseamos podemos copiar ese repositorio bare, llevarlo a donde sea y clonarlo desde allí, por ejemplo podemos copiar nuestro repositorio bare en un usb, así tenemos todo el historial del proyecto allí y podemos pasarlo a todo el equipo, que simplemente lo que hará es clonar el proyecto desde el usb.

Nos dirigimos a nuestra carpeta de trabajo, en mi caso trabajo en la siguiente ruta:

    <code>
    cd /home/jan/htdocs/
    </code>

Una vez que ingreso a la ruta donde clono todos mis proyectos, procedo a clonar nuestro proyecto desde el repositorio bare, así:

    <code>
    git clone /home/jan/data/repositorios-bare/flux.git/ nuevo_flux
    </code>

Git nos dará el siguiente mensaje satisfactorio y en menos de 5 segundos hemos clonado todo el repositorio:

    <code>
    Cloning into 'nuevo_flux'...
    done.
    </code>

![git-clone](https://frontendlabs.io/wp-content/uploads/2015/03/git-clone.png)

Luego ingresamos al proyecto y deberemos configurarlo para que ahora apunte al repositorio principal y ya no hacía nuestro repositorio bare:

    <code>
    cd nuevo_flux
    </code>

Luego de ingresar tenemos que eliminar la referencia hacia el repositorio bare así

    <code>
    git remote rm origin
    </code>

Y luego agregar la url principal de nuestro repositorio, en mi caso sería así:

    <code>
    git remote add origin https://github.com/jansanchez/flux.git
    </code>

Hasta aquí ya logramos el objetivo, como último paso si deseamos podemos actualizar nuestro repositorio por completo, haciendo lo siguiente:

    <code>
    git fetch -p
    </code>

Con la instrucción anterior descargaremos los nuevos tags o ramas nuevas del repositorio.

Y con esto hemos llegado al final de este artículo, estoy seguro que si trabajan con proyectos muy grandes esta técnica les servirá mucho, no necesitarán esperar mucho tiempo para clonar grandes repositorios, no es nada tedioso ya que cuando dominen esta técnica la harán de memoria y de manera más rápida, ya que en este artículo se explicó de manera detallada cada paso.

Nosotros usamos esta técnica muy a menudo cuando ingresa un nuevo desarrollador a uno de nuestros proyectos grandes, no saben el tiempo que nos ahorra tener repositorios bare para todos nuestros proyectos.

Recuerden que no es la única forma de hacerlo, existen otras maneras pero para mi es la más sencilla que conozco, dicho sea de paso la conozco gracias a un gran amigo y desarrollador su nombre es [Luis Mayta](https://twitter.com/slovacus) y él me enseño esta técnica.

Por otro lado los chicos de Frontend Labs estamos muy contentos porque el día de hoy se cumple un año de la creación del Blog, así que me despido con un "Feliz Cumpleaños Frontend Labs".
