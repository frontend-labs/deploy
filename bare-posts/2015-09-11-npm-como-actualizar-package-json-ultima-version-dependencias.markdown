---
author: jansanchez
comments: true
date: 2015-09-11 05:22:03+00:00
layout: post
link: https://frontendlabs.io/2956--npm-como-actualizar-package-json-ultima-version-dependencias
slug: npm-como-actualizar-package-json-ultima-version-dependencias
title: 'Npm: Como actualizar nuestro package.json con la última versión de sus dependencias'
wordpress_id: 2956
categories:
- Javascript
tags:
- Automatización
- Código
- Control de versiones
- ECMAScript
- Javascript
- Nodejs
- npm
- shrinkwrap
---

Cuando tienes un proyecto que depende de paquetes npm y deseas actualizar todas las dependencias para obtener las últimas características y mejoras de estos paquetes en tu proyecto. Por lo general actualizas manualmente cada paquete en tu archivo package.json o haces algún otro proceso que es bastante aburrido: 

Bueno, en este artículo veremos cómo automatizar este proceso de una manera simple, para esto usaremos un paquete npm llamado **npm-check-updates**.



## ¿Qué es npm-check-updates?



[npm-check-updates](https://www.npmjs.org/package/npm-check-updates) es una utilidad que actualiza nuestro package.json con la última versión de todas las dependencias de nuestro proyecto.



## Instalando npm-check-updates



Para instalar npm-check-updates, simplemente tenemos que hacer lo siguiente:


    
    <code>npm install -g npm-check-updates </code>



Si este proceso nos da un error, tal vez sea porque no tenemos permisos de administrador, por lo cual intentaremos escribiendo la palabra sudo delante de la instrucción anterior, así:


    
    <code>sudo npm install -g npm-check-updates</code>



  




## Encontrando las diferencias entre versiones



Para hallar las diferencias entre las versiones de nuestros paquetes simplemente basta con escribir el comando ncu dentro de nuestra carpeta del proyecto, obviamente aquí debe encontrarse el archivo package.json, así:


    
    <code>ncu </code> 



![ncu](https://frontendlabs.io/wp-content/uploads/2015/08/ncu.png)

Como vemos nuestro proyecto tiene dependencias desactualizadas, ncu nos indica las nuevas versiones hacia las que podemos actualizar, pero este comando por si solo no actualiza nada, es solo informativo.



## Actualizando las dependencias de nuestro proyecto



Ahora que ya conocemos cuales son las versiones actuales de nuestras dependencias y hemos evaluado si afectan o no a nuestro proyecto. Por lo general decidimos que todo está bien y deseamos actualizar entonces ejecutaremos el comando ncu -u para que npm-check-updates se encargue de
actualizar nuestro package.json con las últimas versiones para nuestras dependencias, así:


    
    <code>ncu -u</code> 



![ncu-u](https://frontendlabs.io/wp-content/uploads/2015/08/ncu-u.png)

Como vemos npm-check-updates a actualizado nuestro package.json y para comprobarlo hacemos un git status.


    
    <code>git status</code> 



![git status](https://frontendlabs.io/wp-content/uploads/2015/08/git-status.png)

Podemos apreciar que a actualizado correctamente nuestro archivo package.json, una vez comprobado esto, como paso final solo nos quedaría instalar los paquetes actualizados.


    
    <code>npm install -d</code> 



![npm install d start](https://frontendlabs.io/wp-content/uploads/2015/08/npm-install-d-start.png)

Y así de simple hemos actualizado cada una de nuestras dependencias a su última versión.




### Fuente



[npm-check-updates](https://www.npmjs.com/package/npm-check-updates)
[package.json](https://docs.npmjs.com/files/package.json)

