---
author: jansanchez
comments: true
date: 2016-11-13 17:31:27+00:00
layout: post
link: https://frontendlabs.io/3515--que-es-yarn-y-como-usar-administrador-dependencias
slug: que-es-yarn-y-como-usar-administrador-dependencias
title: ¿Qué es YARN? y ¿Cómo usar este administrador de dependencias
wordpress_id: 3515
categories:
- Automatización
- Javascript
tags:
- facebook
- google
- Javascript
- npm
- yarn
---

Yarn es un administrador de dependencias relativamente nuevo, es open source y fue creado por miembros de Facebook y Google, su principal característica es la rápidez.





## ¿CÓMO TRABAJA YARN?, ¿QUÉ LO HACE TAN INTERESANTE?




Es muy difícil no comparar a **Yarn **con el **cli de npm **, así que veamos algunas características de Yarn:


1. Yarn **almacena en caché local todos los paquetes que descarga por primera vez **, para evitar descargarlos más de 1 vez. Esto hace que puedas realizar instalaciones aunque no cuentes con conexión a Internet. Para esto Yarn crea una carpeta local donde administra los paquetes que nosotros instalamos.

2. Yarn **paraleliza las operaciones de descarga de paquetes **para maximizar la utilización de los recursos, por lo que los tiempos de instalación son mucho más rápidos que los de otros administradores de dependencias. Yarn va descargando dependencias en forma paralela, sin necesidad de esperar a que el paquete anterior se termine de descargar.

3. Yarn no detiene la instalación cuando la solicitud de una dependencia falló. Yarn vuelve a realizar las solicitudes necesarias para tener correctamente instalados los paquetes y **no se detiene por un fallo**, siempre continuará instalando las demás dependencias gracias a su descarga paralela.


## ¿QUÉ PROBLEMAS RESUELVE YARN PARA UN DESARROLLADOR?





Antes de la llegada de Yarn, teníamos muchos problemas para administrar las dependencias de un proyecto, debido a que la instalación de dependencias era muy lenta, tediosa y también generaba muchos fallos, por lo cual llevar a cabo la instalación de dependencias de un proyecto era una tarea muy engorrosa, muchas veces el tamaño del proyecto era proporcional a los problemas que teníamos.






Yarn resuelve todos estos problemas debido a que nos ofrece una administración eficiente de dependencias.




## ¿CÓMO INSTALO YARN DESDE NPM?




Muy simple. Con el siguiente comando:




    
    <code>npm install -g yarn</code>




## ¿CÓMO INSTALO YARN EN MACOS Y/O LINUX?



    
    <code>curl -o- -L https://yarnpkg.com/install.sh | bash</code>




## ¿COMANDOS BÁSICOS DE YARN?




Yarn cuenta con muchos comandos, en este artículo veremos algunos de los comandos básicos:





### YARN INIT




Mediante este comando **Yarn **crea un nuevo proyecto.




    
    <code>yarn init</code>




Nos preguntará: el nombre de nuestro proyecto, versión, descripción, archivo inicial, repositorio, autor y el tipo de licencia de nuestro proyecto.




Luego de esto se habrá creado nuestro archivo package.json





### YARN ADD




Mediante este comando **Yarn **agrega una dependencia a nuestro proyecto.




    
    <code>yarn add nombre_del_paquete</code>




### EJEMPLOS DE USO DE YARN ADD




**Agregando como dependencia principal el paquete Express**




    
    <code>yarn add express</code>




**Agregando como dependencia de desarrollo el paquete Gulp**




    
    <code>yarn add --dev gulp</code>




### YARN UPGRADE




Mediante este comando **Yarn **actualiza una dependencia de nuestro proyecto.




    
    <code>yarn upgrade nombre_del_paquete</code>




### EJEMPLO DE USO DE YARN UPGRADE




**Actualizando el paquete Gulp**




    
    <code>yarn upgrade gulp</code>




### YARN REMOVE




Mediante este comando **Yarn **elimina una dependencia de nuestro proyecto.




    
    <code>yarn remove nombre_del_paquete</code>




### EJEMPLO DE USO DE YARN REMOVE




**Eliminando el paquete Gulp como dependencia de nuestro proyecto**




    
    <code>yarn remove gulp</code>




### YARN INSTALL




Mediante este comando **Yarn **instala todas las dependencias de nuestro proyecto.




Para poder utilizar este comando debemos tener nuestro archivo package.json previamente creado. Por ejemplo, podemos usar un proyecto actual creado con **npm **y probar instalarlo con Yarn.




    
    <code>yarn install</code>




### EJEMPLO DE USO DE YARN INSTALL




**Instalando**




    
    <code>yarn install</code>




También puedes utilizar sólo el comando Yarn




    
    <code>yarn</code>




### YARN RUN




Mediante este comando **Yarn **ejecuta las tareas declaradas en la llave 'scripts' de nuestro package.json.





### EJEMPLO DE USO DE YARN RUN




Teniendo el siguiente contenido en nuestro archivo package.json:


**package.json:**

    
    <code>"scripts": {
    	"tarea": "echo 'hola, soy una tarea ejecutada con Yarn!'"
    }</code>




Y en nuestro terminal ejecutamos la tarea llamada tarea, con el siguiente comando:



    
    <code>yarn run tarea</code>




Y veremos en nuestro terminal el mensaje: "hola, soy una tarea ejecutada con Yarn!".





Para llevar a cabo esta magnífica administración de dependencias Yarn crea un archivo llamado yarn.lock, que le ayuda a organizar mejor las dependencias y sus versiones, este archivo es netamente administrado por yarn, así que no se preocupen de este :)





Yarn es una herramienta muy interesante para administrar nuestras dependencias, les recomiendo darle una oportunidad y empezar a usarlo. Estoy seguro que rápidamente verán el gran beneficio de usar Yarn.





De mi poca experiencia con Yarn les recomiendo también pasar a usarlo creando su archivo package.json mediante Yarn, para evitar tener problemas con las instalaciones hechas con npm, ya que npm complica mucho la instalación y las dependencias, por lo cual si intentan instalar un proyecto que fue creado con npm, en muchos casos les saldrán problemas, lo ideal es que agreguen las dependencias mediante el comando yarn add, y una vez que tengan su nuevo archivo package.json, todo va ir bien :)





Si les ha interesado Yarn, les recomiendo visitar su [documentación](https://yarnpkg.com/en/docs), ya que Yarn es muy completo y tiene muchas opciones adicionales.





Y si les gustó el artículo ó tienen dudas, consultas o mejoras al mismo artículo, por favor no se olviden comentar o compartirlo en las redes, de esa manera nos ayudan mucho a seguir con estos artículos.


![yarn feature speed](https://frontendlabs.io/wp-content/uploads/2016/11/yarn-feature-speed.png)



## FUENTES


Yarn. _Documentation._ [En línea] [Fecha de consulta: 21 de Octubre del 2016].
Disponible en: [https://yarnpkg.com/en/docs/cli/](https://yarnpkg.com/en/docs/cli/).

Npm. _Javascript package manager._ [En línea] [Fecha de consulta: 21 de Octubre del 2016].
Disponible en: [https://docs.npmjs.com/cli/npm](https://docs.npmjs.com/cli/npm).


