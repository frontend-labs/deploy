---
author: jansanchez
comments: true
date: 2016-07-03 16:03:23+00:00
layout: post
link: https://frontendlabs.io/3492--como-crear-un-api-rest-falso-en-unos-cuantos-minutos-con-json-server
slug: como-crear-un-api-rest-falso-en-unos-cuantos-minutos-con-json-server
title: ¿Cómo crear un API REST falso en unos cuantos minutos con json-server?
wordpress_id: 3492
categories:
- Javascript
tags:
- Automatización
- json
- Nodejs
---

A veces necesitamos utilizar un API REST que **aún no ha sido construído**, pero del cual ya conocemos su estructura final, porque el API REST que esperamos es muy simple o porque tal vez ya se hizo un diseño previo de este con: [raml](http://raml.org/), [blueprint](https://apiblueprint.org/), etc.






  Realmente pueden ser muchos los casos, no importa si eres desarrollador Front-End, 
  desarrollador de aplicaciones móviles, desarrollador Back-End, etc. Puede que necesites tener un
  Servicio REST creado rápidamente para hacer el prototipado de tus aplicaciones, diversas pruebas para tu aplicación, etc.





Dicho todo lo anterior, vamos a comenzar a crear nuestro **API REST falso **y comenzaremos a utilizarlo en cuestión de minutos: ¡Veamos cómo hacerlo!




## Pre-requisitos para utilizar json-server




El único requisito es tener instalado  [Node.JS](https://frontendlabs.io/232--como-instalar-node-js-debian-linux).




## Creando nuestro API REST falso




Primero creamos una carpeta para el API REST falso e ingresamos.



    
    <code>mkdir api-fake && cd api-fake
    </code>




Luego daremos por iniciado nuestro proyecto creando interactivamente nuestro archivo package.json, con la siguiente instrucción.



    
    <code>npm init -f
    </code>




<blockquote>Mediante la instrucción `npm init -f` o `npm init --force` evitamos todas las preguntas incómodas de `npm init`.</blockquote>




## Instalando json-server como dependencia




Instalamos la única dependencia de nuestro proyecto, la cual es: **json-server**



    
    <code>npm i -S json-server
    </code>




<blockquote>Mediante la instrucción `npm i -S` podemos instalar las dependencias de nuestro proyecto, esto hará que dentro de nuestro archivo package.json se agregue la llave `dependencies` y allí se almacenen las dependencias principales de nuestro proyecto.</blockquote>




Luego de instalar json-server, nuestro archivo **package.json **debe verse algo así:



    
    <code>{
    "name": "api-fake",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
    "json-server": "^0.8.14"
    }
    }
    </code>

  



## Creando la base de datos para json-server





   
  Luego simplemente creamos la carpeta db y dentro de esta creamos el archivo database.json.




    
    <code>mkdir -p ./db/ && touch ./db/database.json
    </code>





  Ahora procedemos a agregar el contenido a nuestra base de datos, en este caso agregaremos el contenido para la tabla **customers**(clientes), para lo cual editamos el archivo ./db/database.json.





En nuestra base de datos json simplemente agregamos lo siguiente:



    
    <code>{
    "customers": []
    }
    </code>




## Configurando y Ejecutando nuestro servidor con json-server





  Ahora sólo nos falta configurar nuestro servidor json-server, para lo cual editamos nuestro archivo ./package.json y agregamos la tarea que llamaremos **server**, de la siguiente manera:




    
    
    <code>
    {
    "name": "api-fake",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
    "server": "json-server --watch ./db/database.json --port 3004",
    "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
    "json-server": "^0.8.14"
    }
    }
    </code>




Como podemos apreciar sólo hemos agregado la línea:



    
    <code>"server": "json-server --watch ./db/database.json --port 3004"
    </code>




En la cual simplemente le indicamos a npm que creé la tarea llamada **server** ejecutando json-server más 2 parámetros **watch** y **port**. Con watch le decimos que esté al tanto de cualquier cambio en nuestra base de datos 
  y con el parámetro port le indicamos que use el puerto 3004, 
  básicamente para no tener conflictos con otros servicios.





### Corriendo nuestro servidor




Para correr el servidor, simplemente escribimos lo siguiente en nuestro terminal:



    
    <code>npm run server
    </code>




Si todo funcionó correctamente nuestro terminal debe verse así:




![json server running terminal](https://frontendlabs.io/wp-content/uploads/2016/06/json-server-running-terminal.png)




Ahora abre cualquier navegador e ingresa a la siguiente dirección [http://localhost:3004](http://localhost:3004) y listo!, ya tenemos corriendo nuestro servidor.




Y en nuestro navegador se debe ver así:




![json server running browser](https://frontendlabs.io/wp-content/uploads/2016/06/json-server-running-browser.png)




## ¿Cómo uso json-server?




Ahora que ya tenemos corriendo el servidor, podremos conocer el verdadero poder de json-server  **insertando, actualizando, consultando y eliminando datos de la tabla customers **en nuestra base de datos. Todo eso lo haremos utilizando los verbos HTTP (get, post, put y delete) para comunicarnos con nuestro API REST falso.





## Postman




[Postman ](https://www.getpostman.com)es un cliente REST, que hace muy fácil probar API REST, ya que cuenta con una interfaz muy amigable, pruebas, sincronización, colaboración y un sin fin de buenas características, usarlo es muy fácil, 
  tanto así que no lo explicaremos en este artículo, tan sólo con las pruebas que haremos
  podrán darse cuenta lo fácil que es usarlo. Postman tiene su plugin para Google Chrome 
  y sus Aplicaciones de escritorio también.





![postman api rest client](https://frontendlabs.io/wp-content/uploads/2016/06/postman-api-rest-client.png)




### Insertando datos en la tabla customers (POST)





  Usando postman vamos a insertar el siguiente objeto de datos hacia la tabla customers 
  mediante el método POST.





- Abrimos postman y en el campo **url  **insertamos lo siguiente: [http://localhost:3004](http://localhost:3004).   
- En el combo de selección de métodos http seleccionamos POST.  
- En la pestaña **Body **seleccionamos la opción  **raw**.  
- Luego aparecerá un nuevo combo a la derecha de la opción **raw**, del cual seleccionamos
  la opción: ** JSON(application/json)**.  
- Por último escribimos lo siguiente en el contenido del cuerpo(body) de la solicitud(request). 




    
    <code>{
    "name": "Nombre Apellido",
    "gender": "male",
    "email": "juan.perez@gmail.com"
    }
    </code>




Entonces, nuestra ventana de postman debería verse algo así:




![customers post](https://frontendlabs.io/wp-content/uploads/2016/06/customers-post.png)




Luego le damos click al botón enviar y si todo sale bien, entonces veremos la siguiente respuesta:




![customers post response](https://frontendlabs.io/wp-content/uploads/2016/06/customers-post-response.png)




Como podemos apreciar postman nos indica el **Status **de la respuesta (201 Created).  
Además nos muestra el **cuerpo de la respuesta**, en el cual podemos ver el campo adicional **id**, el mismo que es generado por json-server para llevar el control de los registros en nuestras tablas.





  Ahora agregaremos un registro más a nuestra tabla customers, así que realizamos los mismos pasos y al final ingresamos la siguiente información para el nuevo registro:




    
    <code>{
    "name": "Nombre Apellido",
    "gender": "male",
    "email": "nombre.apellido@gmail.com"
    }
    </code>




Con esto ya hemos insertado 2 registros en nuestra tabla customers mediante nuestra API REST falsa.	




### Obteniendo datos de la tabla customers (GET)




Usando postman vamos a obtener todos los datos de la tabla customers, para llevar esto a cabo, simplemente abrimos una nueva ventana de postman e ingresamos la siguiente url: [http://localhost:3004/customers](http://localhost:3004/customers), luego elegimos el método GETy por último hacemos click sobre el **botón enviar **y así obtenemos la lista de los 2 registros que hemos agregado anteriormente, como podemos apreciar cada uno tiene su atributo **id**.




![customers get response](https://frontendlabs.io/wp-content/uploads/2016/06/customers-get-response.png)




Ahora queremos obtener sólo los datos del registro con el **id  **2.  
Para llevar esto a cabo, simplemente abrimos una nueva ventana de postman e ingresamos la siguiente url: [http://localhost:3004/customers/2](http://localhost:3004/customers/2), elegimos el método GETy luego hacemos click sobre el **botón enviar**, para de esta manera obtener sólo los datos del 2do registro, como podemos ver a continuación:




![customers get response id 2](https://frontendlabs.io/wp-content/uploads/2016/06/customers-get-response-id-2.png)




### Actualizando datos de la tabla customers (PUT)




- Abrimos postman y en el campo **url  **insertamos lo siguiente: [http://localhost:3004/customers/1](http://localhost:3004/customers/1).   
- En el combo de selección de métodos http seleccionamos PUT.  
- En la pestaña **Body **seleccionamos la opción  **raw**.  
- Luego aparecerá un nuevo combo a la derecha de la opción **raw**, del cual seleccionamos
  la opción: ** JSON(application/json)**.  
- Por último escribimos lo siguiente en el contenido del cuerpo de la solicitud y le damos click en el botón enviar. 




    
    <code>{
    "name": "Juan Perez",
    "gender": "male",
    "email": "juan.perez@gmail.com"
    }
    </code>





  Para comprobar que los cambios fueron realizados sobre el cliente con el id 1, 
  simplemente realizamos los pasos para obtener sólo la información del cliente con el id 1 (siguiendo los pasos que mostramos para el método GET).





![customers get response id 1](https://frontendlabs.io/wp-content/uploads/2016/07/customers-get-response-id-1.png)




### Eliminando datos de la tabla customers (DELETE)




Para este ejemplo eliminaremos el cliente con el **id  **2, siguiendo estos pasos:  
- Abrimos postman y en el campo **url  **insertamos lo siguiente: [http://localhost:3004/customers/2](http://localhost:3004/customers/2).  
- En el combo de selección de métodos http seleccionamos DELETEy por último hacemos click en el botón enviar.
  

![customers delete id 2](https://frontendlabs.io/wp-content/uploads/2016/07/customers-delete-id-2.png)







Como podemos apreciar en el **Status **de la respuesta (200 OK), todo fue bien y el cliente con el id 2 fue eliminado correctamente.   
Cuando se usa el método DELETE, el servidor no devuelve mensaje alguno, simplemente nos guiamos 
  del código de estado (status), que para este caso el satisfactorio es el **200**. 






  Bueno, con esto hemos llegado al fin de este artículo, realmente espero que les sirva, ya que si 
  siguen explorando json-server les aseguro que encontrarán todo lo que necesitan para simular un 
  API REST real, sin problemas. 
  Además de estas características json-server te permite personalizar rutas (routes), 
  filtrar resultados, usar **limit**, **start **y **end **, puedes ordenar mediante **sort**, tiene operadores, soporta **Full-text search **, relaciones y mucho más. 






  Si les interesa ver más, les recomiendo leer la documentación oficinal de json-server, la cual dejo como fuente de este artículo. 
  Si quieren hacer las pruebas con postman, les comparto la [Colección POSTMAN ](https://www.getpostman.com/collections/eb47581915387c794e3d)que usé para realizar los ejemplos en este artículo, y ya saben compartan, comenten, bueno o malo todo es bienvenido, saludos!.





## Fuentes




NPM, Inc. _json-server._ [En línea] [Fecha de consulta: 29 de Junio del 2016].   
Disponible en: [https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server).




