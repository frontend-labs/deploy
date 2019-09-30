---
author: erikfloresq
comments: true
date: 2015-06-06 19:59:57+00:00
layout: post
link: https://frontendlabs.io/2776--como-crear-un-servidor-con-expressjs
slug: como-crear-un-servidor-con-expressjs
title: ¿Cómo crear un servidor con expressjs?
wordpress_id: 2776
categories:
- Javascript
tags:
- Front-End
- Javascript
- Tutorial
---

### **Contexto**




La llegada de nodejs fue de mucha utilidad para mucha gente que desarrolla javascript, ya que ahora podemos hacer tareas del lado del servidor usando javascript.




Entre muchas de las cosas nuevas que podemos hacer con nodejs es levantar un servidor, que en sí, es como el “hello world” para entenderlo.






[sourcecode language="javascript"]

/* Ejemplo de como crear un servidor en nodejs */
var http = require(“http”);
var server = http.createServer(function(request, response){
     response.writeHead(200, {‘Content-Type’ : ’text/plain'});
     response.write(‘<h1>Front End Labs</h1>');
     response.end();
});
server.listen(80);
console.log(’Server Start :D');
[/sourcecode]






Hasta ahora podemos ver que nodejs tiene mucho por dar y que con pocas líneas podemos tener un servidor.










### _**Expressjs**_




_**Se propone a ser el framework “minimalista” para la creación de aplicaciones web basadas en node, con la posibilidad de crear un servidor y hasta un servicio REST**,_ veamos a continuación como crear un servidor con expressjs.






[sourcecode language="javascript"]
/* Ejemplo de como crear un servidor con expressjs */
var express = require('express');
var app = express();
app.get('/',function(request, response){
  response.send('hello express');
});
app.listen(3000, function(){
  console.log('Server Express Ready!');
});
[/sourcecode]






A mi opinión la creación del servidor con express tiende a ser un poco más entendible y que si lo hacemos con lo que nodejs nos ofrece, podríamos decir que _**"express es un tipo de jQuery para node"**_







### **Explicando la creación del Servidor**







#### **Creando el package.json**




Primero tenemos que crear un package.json para descargar las librerías desde npm, para eso nos ubicamos en la carpeta de nuestro proyecto y escribimos en nuestro terminal






[sourcecode language="bash"]
$ sudo npm init
[/sourcecode]






Les pedirá su clave y luego les mostrará detalles a modificar en su package.json propios de su proyecto, pero si desean por temas de demo, le pueden dar enter a todo y tendría que tener algo así







[![express-packagejson](https://frontendlabs.io/wp-content/uploads/2015/06/express-packagejson.png)](https://frontendlabs.io/wp-content/uploads/2015/06/express-packagejson.png)










Le dan yes y les tendría que crear el package.json en la carpeta de su proyecto, que en mi caso se llama serverExpress







#### **Obteniendo express**




Luego escriben en el terminal:






[sourcecode type="bash"]
$ sudo npm install express
[/sourcecode]






Y les tendría que quedar algo así:







[![express-install](https://frontendlabs.io/wp-content/uploads/2015/06/express-install.png)](https://frontendlabs.io/wp-content/uploads/2015/06/express-install.png)










**Tip:**  En mac y linux se utiliza "sudo", en windows no.







#### **Creando el servidor**




Para el ejemplo podemos crear un archivo que se llama serverExpress.js donde irá el código js para crear el servidor, para lo cual tendríamos algo así







[![express-files](https://frontendlabs.io/wp-content/uploads/2015/06/express-files.png)](https://frontendlabs.io/wp-content/uploads/2015/06/express-files.png)










En nuestro archivo serverExpress.js, lo primero que tenemos que hacer es llamar al paquete de express para obtener todas sus funcionalidades






[sourcecode language="javascript"]
var express = require('express');
[/sourcecode]






En la variable express se obtiene una función con todas las funciones, que las guardaremos en la variable app, para su fácil y entendible codificación






[sourcecode language="javascript"]
var app = express();
[/sourcecode]






Una vez que ya tenemos todas las funciones de express en la variable **app**, empezamos la creación del servidor.




Como lo que queremos es obtener contenido, para eso tenemos que usar el método get que nos proporciona express






[sourcecode language="javascript"]
app.get();
[/sourcecode]






Nosotros queremos que el servidor reaccione si entramos desde la raíz del dominio, por ejemplo http://frontend.com/






[sourcecode language="javascript"]
app.get(‘/‘);
[/sourcecode]






Ademas queremos que envie un mensaje de respuesta






[sourcecode language="javascript"]
app.get('/',function(request, response){
  response.send('hello express');
});
[/sourcecode]






El método "**get"** usa un **callback** donde recibe los objetos para hacer las respuestas (response) y obtener solicitudes (request), como nosotros queremos que el servidor envié un mensaje usamos el objeto response y a su vez el método **send** para enviar un mensaje en texto plano.







Ahora necesitamos que el servidor se inicie en el puerto 3000 y cuando el servidor haya iniciado correctamente, este envía un mensaje de que todo esta ok






[sourcecode language="javascript"]
app.listen(3000, function(){
  console.log('Server Express Ready!');
});
[/sourcecode]






Como podemos ver para este caso utilizamos el método **listen** y un callback para enviar un mensaje confirmación.







#### **Iniciando el servidor**




Ahora tenemos que iniciar el servidor, para eso nos ubicamos en nuestro terminal e inicializamos el servidor






[sourcecode language="javascript"]
$ node serverExpress.js
[/sourcecode]






Y si todo está correcto, tendríamos que ver en nuestro terminal el mensaje que escribimos en nuestro console.log en el **app.listen** que es 'Server Express Ready!'







Y listo! ya tienes un servidor listo con expressjs







[![express-ready](https://frontendlabs.io/wp-content/uploads/2015/06/express-ready.png)](https://frontendlabs.io/wp-content/uploads/2015/06/express-ready.png)







Si probamos, vemos que el servidor envía el mensaje que configuramos cuando entra a la raíz del dominio







[![express-test](https://frontendlabs.io/wp-content/uploads/2015/06/express-test.png)](https://frontendlabs.io/wp-content/uploads/2015/06/express-test.png)










#### **Configurando la carpeta de los elementos estáticos**




Ya tengo mi servidor y quiero mostrar html, js y css, así que lo agrego a mi proyecto







[![express-archivos](https://frontendlabs.io/wp-content/uploads/2015/06/express-archivos.png)](https://frontendlabs.io/wp-content/uploads/2015/06/express-archivos.png)










Para ver el index de mi proyecto, tendría que iniciar el servidor para eso tengo que escribir en mi consola, estando en la carpeta del proyecto






[sourcecode language="javascript"]
$ node serverExpress.js
[/sourcecode]






Y veremos cómo se inicia nuestro servidor y luego ingresamos a http://localhost:3000 ya que así lo habíamos configurado, pero vemos que nuestros estilos y scripts no está siendo cargados ¿Porque?




[![express-error-web](https://frontendlabs.io/wp-content/uploads/2015/06/express-error-web-1024x684.png)](https://frontendlabs.io/wp-content/uploads/2015/06/express-error-web.png)







Eso pasa, porque express trabaja con una ruta para almacenar los archivos estáticos (archivos que no se modifican, como js y css), para lo cual podemos configurar la ruta de nuestra carpeta de estáticos agregando en el archivo serverExpress.js






[sourcecode language="javascript"]
//Primer Forma
app.use(express.static('public'));

//Segunda Forma
app.use(express.static(__dirname + '/public'));
[/sourcecode]






Como podemos ver, usamos la variable express y a su vez el método static que posee express para definir el nombre de la carpeta de estáticos, que llamaremos ‘public’ y para que esta configuración sea iniciada se tiene que usar app.use(), que es la manera cómo express usa **middlewares**.




Entonces la configuración que hacemos para el ruteo de estáticos es mediante un middleware; este concepto de middlewares se usará mucho cuando desarrollemos un API REST más adelante.







Una vez agregada esta línea, creamos nuestra carpeta public y agregamos nuestros estáticos, es decir, nuestros estilos y scripts.







[![express-static-good](https://frontendlabs.io/wp-content/uploads/2015/06/express-static-good.png)](https://frontendlabs.io/wp-content/uploads/2015/06/express-static-good.png)







Ahora, volvemos a nuestro terminal y colocamos crtl+C para cancelar al servidor y volver a iniciarlo como lo hicimos anteriormente y refrescamos nuestro navegador







[![express-con-estulos](https://frontendlabs.io/wp-content/uploads/2015/06/express-con-estulos-1024x684.png)](https://frontendlabs.io/wp-content/uploads/2015/06/express-con-estulos.png)







Y listo! Ahora vemos como nuestros estáticos ahora son llamados.




Tenemos que recordar que para llamar a nuestros estáticos no hace falta colocar la carpeta public, ya que todo esto ya lo hace express, es decir:







**La forma incorrecta de llamar estáticos**



[sourcecode language="html"]
<link href=“public/style.css” rel=“stylesheet” />
[/sourcecode]



**La forma correcta de llamar estáticos**



[sourcecode language="html"]
<link href=“style.css” rel=“stylesheet” />
[/sourcecode]



### **Conclusión**




Express es muy fácil de aprender y nos muestra que tiene una simpleza y robustez para el desarrollo de aplicaciones.




En el siguiente post veremos cómo crear un API REST con expressjs







[@erikfloresq](http://twitter.com/erikfloresq)




































