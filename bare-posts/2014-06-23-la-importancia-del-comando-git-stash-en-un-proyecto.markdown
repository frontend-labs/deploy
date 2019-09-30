---
author: VictorJSV
comments: true
date: 2014-06-23 03:38:49+00:00
layout: post
link: https://frontendlabs.io/940--la-importancia-del-comando-git-stash-en-un-proyecto
slug: la-importancia-del-comando-git-stash-en-un-proyecto
title: La importancia del comando "Git stash" en un proyecto
wordpress_id: 940
categories:
- Git
tags:
- Automatización
- Control de versiones
- Linux
---

En el desarrollo de un proyecto es necesario utilizar un sistema de control de versiones como [Git ](http://git-scm.com/) para tener un orden en las modificaciones que se dan por parte de los miembros del equipo.

Muchas veces en proyectos grandes intervienen varios desarrolladores, donde se modifican o crean archivos para atender los requerimientos que se solicitan en el proyecto. Con el uso del Git, que es un gestor de versiones, se usa el concepto de ramas que son utilizadas para desarrollar funcionalidades aisladas unas de otras.


## Git stash


Git nos brinda muchos comandos para controlar estas ramas, una de ellas es el "[git stash](http://git-scm.com/docs/git-stash)", que guarda las modificaciones locales en temporal y vuelve el directorio de trabajo a un estado inicial (como si no se hubiese hecho ningún cambio en la rama).


## ¿En qué casos usarlo?


Supongamos que estamos en un proyecto con una funcionalidad que está en una rama diferente (rama hija de master), siendo **master **la rama principal de nuestro proyecto.



	
  * task#01 : Funcionalidad 1


[![git stash](https://frontendlabs.io/wp-content/uploads/2014/06/git-stash.jpg)](https://frontendlabs.io/wp-content/uploads/2014/06/git-stash.jpg)

Ya hemos estado haciendo cambios en la rama **"task#01"** y de pronto sucede que esta funcionalidad se debe interrumpir para hacer un cambio de último minuto en la rama **"master"**, con esto **git** muchas veces no me va permitir cambiar de rama hasta que halla un commit confirmando mis cambios, entonces **¿Qué hago?**.

Uno pensaría, "¡Fácil!, hago un commit de mis cambios, cambio de rama y sigo con el flujo", pero esto es lo que **no se debe hacer**, ya que por **buenas practicas yo no debo hacer un commit hasta haber terminado mi requerimiento**. Es aquí donde entra el poder del **"git stash"**.


### Git stash:


- Estamos actualmente en la rama task#01 y hago un "**git status**" para ver mis cambios.

[sourcecode language="bash"]
Xen@XEN-PC /D/www/PaginaWeb (task#01)
$ git status
On branch task#01
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   index.html

no changes added to commit (use "git add" and/or "git commit -a")
[/sourcecode]

- Como vemos tenemos un cambio en el index.html y para cambiar de rama sin ningun problema debo hacer un "**git stash**"

[sourcecode language="bash"]
Xen@XEN-PC /D/www/PaginaWeb (task#01)
$ git stash
Saved working directory and index state WIP on task#01: 0ef3c38 Git : registrando el proyecto en el repositorio git
HEAD is now at 0ef3c38 Git : registrando el proyecto en el repositorio git
[/sourcecode]

Con esto guardo los cambios de mi rama en un stash temporal

- Luego reviso si efectivamente la rama está limpia sin cambios, con "**git status**"

[sourcecode language="bash"]
Xen@XEN-PC /D/www/PaginaWeb (task#01)
$ git st
On branch task#01
nothing to commit, working directory clean
[/sourcecode]

=O! ¡No hay cambios! y puedo facilmente cambiar de rama, pero **_¿En donde están mis cambios?_**


### Git stash list:


- Para poder visualizar una lista de stash debo hacer un "**git stash list**"

[sourcecode language="bash"]
Xen@XEN-PC /D/www/PaginaWeb (task#01)
$ git stash list
stash@{0}: WIP on task#01: 0ef3c38 Git : registrando el proyecto en el repositorio
(END)
[/sourcecode]

Como vemos nos muestra una lista de los stash que tenemos, donde:



	
  * stash@{0}: - Es el ID del stash

	
  * WIP on task#01: - Es el nombre de la rama donde está

	
  * 0ef3c38 Git : registrando el proyecto en el repositorio - Es el nombre del stash


Actualmente solo tenemos un stash que toma como nombre el último commit, pero **_¿Si quiero asignarle un nombre a mi stash?_**


### Git stash save:


- Para asignar un nombre debo hacer un **git stash save "nombre de mi stash" **.
Primero hago un cambio en otro archivo, luego tipeo "**git status**" para ver mis cambios y al final "**git stash save**".

[sourcecode language="bash"]
Xen@XEN-PC /D/www/PaginaWeb (task#01)
$ git st
On branch task#01
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   dia.css

no changes added to commit (use "git add" and/or "git commit -a")
[/sourcecode]


[sourcecode language="bash"]
Xen@XEN-PC /D/www/PaginaWeb (task#01)
$ git stash save "requerimiento 2"
Saved working directory and index state On task#01: requerimiento 2
HEAD is now at 0ef3c38 Git : registrando el proyecto en el repositorio git
[/sourcecode]

En este caso estoy guardando el **git stash** con el nombre de "**Requerimiento 2**"

- Para ver mi lista de stash, hago un "**git stash list**"

[sourcecode language="bash"]
Xen@XEN-PC /D/www/PaginaWeb (task#01)
$ git stash list
stash@{0}: On task#01: requerimiento 2
stash@{1}: WIP on task#01: 0ef3c38 Git : registrando el proyecto en el repositor
(END)
[/sourcecode]

Como vemos se creó el segundo stash con el nombre que le asigné y siempre el nuevo **stash** lo toma como indice 0 (**stash@{0}**). Una vez que me fuí a otra rama y termine con el otro cambio que me pedían, volviendo a la rama task#01 **_¿Cómo recupero mis cambios de un stash que hice?_**


### Git stash pop: 


Para aplicar los cambios de un stash se usa **git stash pop** y se puede aplicar de dos formas:



	
  * **git stash pop** - Que por defecto toma el indice cero (0) del **stash list**.

	
  * **git stash pop stash@{0}** - En este caso antepongo la palabra stash@ y le asigno el ID del stash dentro de llaves, esto me permite poner cualquier **ID del stash list** 0,1,2 .. en caso de que quiera especificar el stash que quiera aplicar



[sourcecode language="bash"]
Xen@XEN-PC /D/Biblioteca Xen/www/PaginaWeb (task#01)
$ git stash pop
On branch task#01
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   dia.css

no changes added to commit (use "git add" and/or "git commit -a")
[/sourcecode]

Como vemos se aplicaron los cambios del último stash que hice, listo para continuar con mis cambios.
Realizo un **stash list** para ver mi lista actual de stash

[sourcecode language="bash"]
Xen@XEN-PC /D/www/PaginaWeb (task#01)
$ git stash list
stash@{0}: WIP on task#01: 0ef3c38 Git : registro del proyecto en el repositor
(END)
[/sourcecode]

Como vemos solo tengo un stash en la lista con el indice cero {0} y se eliminó el último stash con el nombre de "**requerimiento 2**", a esto de nos viene otra pregunta: **_¿Cómo hago para ver los cambios de un stash antes de aplicarlo a mi rama?_**


### Git stash show: 


Para ver los cambios de un stash se usa **git stash show stash@{0} -u**, donde especifico el indice del stash que en este caso es cero{0}

[sourcecode language="bash"]
Xen@XEN-PC /D/www/PaginaWeb (task#01)
$ git stash show stash@{0} -u
diff --git a/index.html b/index.html
index b39bdee..cbd8100 100644
--- a/index.html
+++ b/index.html
@@ -70,6 +70,10 @@
                                */
                        });

+                       var newMethod = function (){
+                               return false;
+                       }
+
[/sourcecode]

De esta manera puedo ver los cambios de un stash, pero si quiero aplicar el stash sin eliminarlo del **stash list** ¿Cómo hago?.


### Git stash apply:


Este comando nos ayuda a aplicar un stash sin eliminarlo de la lista de stash y se puede aplicar de dos formas:



	
  * **git stash apply** - Que por defecto toma el indice cero (0) del **stash list**.

	
  * **git stash apply - - 0** - En este caso antepongo dos guiones "- -" y le asigno el ID del stash, esto me permite poner cualquier **ID del stash list** 0,1,2 .. en caso de que quiera especificar el stash que quiera aplicar



[sourcecode language="bash"]
Xen@XEN-PC /D/www/PaginaWeb (task#01)
$ git stash apply
On branch task#01
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   dia.css
        modified:   index.html

no changes added to commit (use "git add" and/or "git commit -a")
[/sourcecode]
Luego esto reviso la lista de stash con git stash list
[sourcecode language="bash"]
Xen@XEN-PC /D/www/PaginaWeb (task#01)
$ git stash list
stash@{0}: WIP on task#01: 0ef3c38 Git : registro del proyecto en el repositor
(END)
[/sourcecode]
Con esto comprobamos que aplicamos los cambios del stash a nuestra rama sin eliminarlo de la lista.



### Git stash drop:


Para eliminar un stash de lista debemos poner **git stash drop -q stash@{0}**, donde le asignamos el indice del stash
[sourcecode language="bash"]
Xen@XEN-PC /D/www/PaginaWeb (task#01)
$ git stash drop -q stash@{0}
[/sourcecode]
Luego reviso la lsita de stash
[sourcecode language="bash"]
Xen@XEN-PC /D/www/PaginaWeb (task#01)
$ git stash list

Xen@XEN-PC /D/www/PaginaWeb (task#01)
$_
[/sourcecode]
Como vemos ya no se encuentra el stash en al lista.

Les invito a leer la documentación del git stash, en [este enlace](http://git-scm.com/docs/git-stash) para mayor información.
