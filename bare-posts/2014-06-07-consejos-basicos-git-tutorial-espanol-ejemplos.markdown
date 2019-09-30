---
author: jansanchez
comments: true
date: 2014-06-07 06:06:37+00:00
layout: post
link: https://frontendlabs.io/779--consejos-basicos-git-tutorial-espanol-ejemplos
slug: consejos-basicos-git-tutorial-espanol-ejemplos
title: Consejos básicos usando Git
wordpress_id: 779
categories:
- Git
- Linux
tags:
- Control de versiones
- Debian
- Linux
---

[Git](http://git-scm.com/) es un **sistema de control de versiones distribuido** diseñado para manejar todo tipo de proyectos, desde pequeños hasta muy grandes con gran velocidad y eficiencia.
Y por si fuera poco es libre y de código abierto.

A continuación veremos algunas buenas prácticas al usar Git:


## **1. Haz git pull con frecuencia**


Una de las mejores prácticas al utilizar un sistema de control de versiones es **mantener nuestros archivos sincronizados**. Para lograr esto debes hacer **git pull** frecuentemente.

Con esto mantendrás tu repositorio al día y tendrás la oportunidad de combinar tu archivos modificados con los cambios recientes de los demás, esto hará que la fusión(merge) sea más fácil de entender y llevar a cabo.

Para que esta práctica logre su objetivo deberás contar con el apoyo y compromiso de tu equipo de desarrollo, para de esta forma mitigar los conflictos entre archivos.


## **2. Escribe tus commits como te gustaría que los demás escriban los suyos**


Me imagino que no te gustaría, ni serviría tener un proyecto de desarrollo con **commits** como estos no?

[![bad commits](https://frontendlabs.io/wp-content/uploads/2014/06/coomits.png)](https://frontendlabs.io/wp-content/uploads/2014/06/coomits.png)

Por eso al escribir el mensaje de un commit(confirmación de cambios) **debemos de especificar  una descripción real del cambio **o la tarea que hemos realizado, pensando en las personas que revisarán el repositorio y pensando también en nosotros mismos y como queremos ver los commits en nuestro proyecto.

No por un tema estético, sino cuando necesitemos realizar algún cambio o retirar alguna tarea realizada en el proyecto, simplemente buscamos el commit y no tenemos que estar buscando en todo el proyecto para encontrar el código de la funcionalidad, **ya que ese commit bien descrito nos dirá cuales son los archivos involucrados**.

Tal vez puedes comenzar a aplicar esto poniéndote un limite de palabras mínimas para un mensaje de commit como por ejemplo: **3**.


## **3. Haz un commit sólo cuando tengas un cambio concreto**


Un commit es una actualización granular a un proyecto,** que puede incluir uno o más cambios en uno o más archivos**.
Piensen en esto como si fuese **el registro de una unidad de trabajo realizado**, que puede ser aplicado o puede ser retirado del proyecto como un **todo lógico**.

De manera que cuando hagamos un commit **estamos indicando que ese commit es por un cambio o una tarea en concreto**, de esta forma imagínense si en determinado caso realizamos una tarea que involucró 3 archivos, ese commit registrará todos los cambios para esa tarea.

Entonces si en un futuro quisiéramos retirar ese cambio podríamos fácilmente regresar a ese commit y quitar esos cambios en los archivos específicos.

Es una buena práctica que trae muchos beneficios pero obviamente hay casos en los que tal vez no sea posible realizarla, **a continuación una propuesta** de como realizar los commits en nuestro proyecto:

[![commits](https://frontendlabs.io/wp-content/uploads/2014/07/commits.png)](https://frontendlabs.io/wp-content/uploads/2014/07/commits.png)

Como podemos observar en nuestra propuesta:

a) Escribimos la **sección principal** donde se hizo el cambio seguido de 2 puntos(:).
b) Luego de los 2 puntos escribimos nuestro **shortlog** o titulo del commit.

De esta forma podemos tener un commit más descriptivo, creanme que les ayudará mucho en sus proyectos de desarrollo.


## **4. Haz git push sólo si los cambios que enviarás han sido testeados**


Cuando hacemos un git push enviamos nuestros commits al servidor. Al realizar esto debemos estar seguros que nuestros cambios o la tarea realizada no tiene bugs ó al menos debemos haberlo testeado lo suficiente para evitar subir errores al servidor.

Esta buena práctica nos ayuda en muchos sentidos, uno muy importante es que al realizarla **nos acostumbramos a validar en local antes de cada push**, y si llegamos a encontrar algún error en nuestra tarea volvemos a hacer el commit con la corrección y si todo esta bien entonces hacemos un push.

Con esto tendremos un registro de Git más limpio, ya que una funcionalidad o tarea especifica siempre estará registrada en uno o pocos commits y estos estarán juntos, de esta forma nos será muy fácil identificar los cambios para esta tarea, aunque haya tenido algunas correcciones porque todo estará agrupado en un mismo bloque de cambios.


## **5. Crea ramas para separar tareas**


Una de las mayores ventajas de Git tiene sobre otros sistemas de control de versiones es que la fusión(merge) por lo general funciona bien, debido a que **Git elige automáticamente el mejor ancestro común para realizar una fusión**.

Es una buena práctica **crear ramas locales**, de esta forma podemos trabajar funcionalidades independientemente y una vez terminado nuestro trabajo en esta rama la fusionamos con la rama principal de nuestro proyecto. Por lo general estas fusiones **son más limpias y no presentan ningún problema insuperable**.

Si te interesaron estos consejos y quieres saber más sobre Git puedes pasar por el siguiente post: [Comandos Git que no debes dejar de usar](https://frontendlabs.io/885--comandos-git-que-no-debes-dejar-de-usar-tutorial-espanol).

Este post seguirá creciendo según vaya encontrando más buenas prácticas que aplicar con Git, si me pueden comentar algunas buenas prácticas también las puedo ir agregando, pronto haré un post sobre comandos básicos con Git.

Si desean que hagamos un post sobre algún tema en especial, escríbannos a [frontend.labs.peru@gmail.com](mailto:frontend.labs.peru@gmail.com), hasta la próxima.


