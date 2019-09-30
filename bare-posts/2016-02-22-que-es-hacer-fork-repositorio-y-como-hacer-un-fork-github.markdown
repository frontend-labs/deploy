---
author: jansanchez
comments: true
date: 2016-02-22 06:01:22+00:00
layout: post
link: https://frontendlabs.io/3266--que-es-hacer-fork-repositorio-y-como-hacer-un-fork-github
slug: que-es-hacer-fork-repositorio-y-como-hacer-un-fork-github
title: Qué es hacer Fork a un repositorio y cómo hacer un fork correctamente
wordpress_id: 3266
categories:
- Git
tags:
- bitbucket
- colaborar
- fork
- forkeado
- forked
- Git
- Github
---

## ¿Qué significa hacerle Fork a un repositorio?




Hacerle fork a un repositorio significa **copiarlo**. Copiar un repositorio nos permite experimentar libremente sin afectar al proyecto original, obviamente porque **nuestro fork es una copia**, que se encontrará en nuestra cuenta de github, bitbucket o algún otro servicio de alojamiento de repositorios.





Por lo general, las copias se utilizan para proponer cambios en el proyecto de otra persona u organización ó para utilizar el proyecto de otra persona como punto de partida para nuevas ideas.






## Haciendo fork a un repositorio




Para poner en práctica este concepto vamos a hacerle fork al repositorio de relay, relay es un Framework JavaScript creado por el equipo de desarrollo de Facebook.




	Para llevar a cabo esto, primero necesitamos loguearnos en nuestra cuenta de [Github](https://github.com/login?return_to=https://github.com/facebook/relay), si no tienes una cuenta antes debes [crearla](https://github.com/join?source=frontendlabs.io).




![fork github repository](https://frontendlabs.io/wp-content/uploads/2016/02/fork-repository.png)




Una vez logueado, **haremos un fork de este repositorio**. Para esto nos dirigimos al repositorio de [relay](https://github.com/facebook/relay).
En la página principal de este repositorio veremos que en la parte superior derecha hay un botón con la opción **Fork**. Lo presionamos y con esto empezaremos a realizar un Fork de ese repositorio **hacia nuestra cuenta de Github**. 






En algunos casos en los que tengamos una cuenta personal asociada a alguna organización, Github nos pedirá que especifiquemos si el Fork se hará sobre nuestra cuenta personal o en alguna de las cuentas de organizaciones a las que pertenecemos.






Una vez que este proceso haya terminado, **habremos copiado ese repositorio a nuestra cuenta**, así que luego de esto veremos un encabezado parecido al siguiente:




![forked repository](https://frontendlabs.io/wp-content/uploads/2016/02/forked.png)




Como podemos ver Github nos indica que ahora tenemos en **nuestra cuenta **un **nuevo repositorio **llamado **relay **y vemos que debajo dice **'forked from facebook/relay' **(copiado desde facebook/relay).




## Trabajando con un repositorio Forked





Por lo general, cuando se hace Fork de un repositorio se realizan modificaciones sobre este repositorio para manipular la versión original sin causar problemas, es como tener nuestro propio 'patio de juegos' para poder hacer lo que deseemos con el proyecto.






Pero a veces **queremos hacer mejoras sobre ese proyecto **y enviar nuestras mejoras al dueño original para que las implemente ó **simplemente queremos seguir teniendo las actualizaciones del proyecto original**.




Esta vez nos enfocaremos en **cómo seguir teniendo las actualizaciones del proyecto original**




Mediante este procedimiento **podremos mantener actualizado nuestro repositorio forked desde el repositorio original**, realizando los siguientes pasos:




## Clonando nuestro repositorio Forked




Con la siguiente instrucción clonaremos nuestro nuevo repositorio Forked, y **nombraremos **relay_forked a la carpeta que almacenará nuestro proyecto:



    
    <code>git clone https://github.com/jansanchez/relay.git relay_forked
    </code>





Como podemos apreciar, estamos clonando nuestro repositorio forked, y no el de facebook, esto es algo que tenemos que tener muy en cuenta, debido a que nuestro repositorio es una copia del repositorio original de facebook.






Una vez que terminamos de clonar nuestro nuevo repositorio, ingresamos a la carpeta relay_forked



    
    <code>cd relay_forked
    </code>




Y luego debemos indicarle a [git ](https://frontendlabs.io/?s=git)que nuestro repositorio tiene una **ubicación remota**, en nuestro caso la url de la ubicación remota original es: [https://github.com/facebook/relay.git](https://github.com/facebook/relay), y la agregamos a nuestro repositorio local escribiendo el siguiente comando:



    
    <code>git remote add upstream https://github.com/facebook/relay.git
    </code>




Con esto le estamos indicando a git que agregue la siguiente **ubicación remota **y la llamamos  **upstream**. Upstream es un término en inglés que se puede interpretar como "principal" o "producción", pero si deseamos le podemos cambiar de nombre, ya que el nombre **upstream **sólo se usa por estándar y no es que sea algo obligatorio.





Luego de esto, ya estamos listos para poder actualizar nuestro repositorio desde la ubicación remota original, escribiendo el siguiente comando:





    
    <code>git fetch upstream
    </code>




De esta forma obtenemos todas las ramas actualizadas desde esa ubicación remota. Pero aún no tendremos los cambios en nuestra rama **master **o la rama que estemos usando actualmente en nuestro repositorio forked. 




Para lograr eso tenemos que hacer un **merge **o **rebase **para poder fusionar los nuevos cambios del proyecto principal (original) con nuestro repositorio forked (copia). 





Digamos que estamos trabajando en la rama master, entonces debemos asegurarnos que estamos en la rama master, caso contrario ingresamos a nuestra rama master, así:





    
    <code>git checkout master
    </code>




Y ahora que nos encontramos en nuestra rama master, fusionamos los cambios del **proyecto principal  ** con **nuestro proyecto **con el siguiente comando: 



    
    <code>git merge upstream/master
    </code>




Como actualmente nos encontramos en nuestra rama master local, con esta instrucción le estamos diciendo a git, que fusione los cambios desde la rama **upstream/master **sobre nuestra rama local master.




En cambio si usas **rebase** en vez de merge, entonces la instrucción que debes realizar es la siguiente:



    
    <code>git rebase upstream/master
    </code>





De esta manera hemos aprendido cómo comenzar a trabajar con proyectos Forked en Github, espero que les haya servido de algo este pequeño artículo.






![fork-github-repository](https://frontendlabs.io/wp-content/uploads/2016/02/fork-github-repository.png)




## Referencias bibliográficas




GITHUB HELP. _Fork A Repo. _[En línea] [Fecha de consulta: 12 de Febrero del 2016].   
Disponible en: [Fork a repo - github](https://help.github.com/articles/fork-a-repo/).




GITHUB HELP. _Syncing a fork. _[En línea] [Fecha de consulta: 12 de Febrero del 2016].   
Disponible en: [Syncing a fork - github](https://help.github.com/articles/syncing-a-fork/).




GITHUB GUIDES. _Forking Projects. _[En línea] [Fecha de publicación: 23 de Enero del 2014] [Fecha de consulta: 12 de Febrero del 2016].   
Disponible en: [Forking Projects - github](https://guides.github.com/activities/forking/).



