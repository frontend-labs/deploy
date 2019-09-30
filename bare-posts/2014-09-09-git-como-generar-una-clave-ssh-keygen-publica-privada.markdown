---
author: jansanchez
comments: true
date: 2014-09-09 18:20:12+00:00
layout: post
link: https://frontendlabs.io/1821--git-como-generar-una-clave-ssh-keygen-publica-privada
slug: git-como-generar-una-clave-ssh-keygen-publica-privada
title: 'Git: ¿Cómo generar una clave SSH?'
wordpress_id: 1821
categories:
- Git
tags:
- Debian
- Git
- Github
- Linux
- Ubuntu
---

Las claves SSH también conocidas como llaves SSH, son una manera de identificar las computadoras de confianza, sin tener que ingresar una contraseña.

Las claves SSH se deben generar para cada usuario. Luego de realizar la generación obtendremos una clave privada y una clave pública.

En este artículo te mostraremos como generar claves SSH para tu usuario, siguiendo estos sencillos pasos:



## Validamos si tenemos una clave SSH existente



Para ello escribimos lo siguiente en nuestro terminal:


    
    
    <code>
    ls -al ~/.ssh | grep ".pub"
    </code>
    



Si ya tenemos una clave SSH nos aparecerá algo similar a esto:


    
    
    <code>
    -rw-r--r--  1 frontend frontend  399 Aug 22 17:04 id_rsa.pub
    </code>
    



Pero si aún no la hemos generado entonces nos pueden salir estos 2 mensajes:


    
    
    <code>
    ls: cannot access /home/frontend/.ssh: No such file or directory
    </code>
    



ó también:


    
    
    <code>
    </code>
    



Sí, nos puede salir vacío o en blanco, ya que puede que tengamos la carpeta .ssh pero no haya ningún archivo dentro de esta.



## Generando una nueva clave SSH



Si aún no tenemos una clave .ssh entonces la procederemos a generar escribiendo en nuestro terminal lo siguiente:

Claro, colocando tu correo electrónico en vez de tu_correo@tu_dominio.com.


    
    
    <code>
    ssh-keygen -t rsa -C "tu_correo@tu_dominio.com"
    </code>
    



De preferencia dejemoslo con los ajustes por defecto, por lo que cuando nos haga las 3 preguntas, simplemente pulsamos Enter.

Luego del proceso nos quedará algo parecido a esto:


    
    
    <code>
    ssh-keygen -t rsa -C "tu_correo@tu_dominio.com"
    Generating public/private rsa key pair.
    Enter file in which to save the key (/home/frontend/.ssh/id_rsa): 
    Enter passphrase (empty for no passphrase): 
    Enter same passphrase again: 
    Your identification has been saved in /home/frontend/.ssh/id_rsa.
    Your public key has been saved in /home/frontend/.ssh/id_rsa.pub.
    The key fingerprint is:
    1f:34:f9:06:de:55:db:c0:6d:4c:03:97:cf:d3:15:56 tu_correo@tu_dominio.com
    The key's randomart image is:
    +--[ RSA 2048]----+
    |                 |
    |                 |
    |                 |
    |    . o S        |
    |o+oo.o * E       |
    |*+o...= o        |
    |+o.+.o           |
    |o o++..          |
    +-----------------+
    </code>
    



Esto quiere decir que ya generamos nuestras claves SSH correctamente. Como podemos apreciar, la clave privada a sido guardada en: /home/frontend/.ssh/id_rsa y la clave pública en /home/frontend/.ssh/id_rsa.pub.

Entonces ya podemos agregar nuestra nueva clave SSH al ssh-agent, escribiendo lo siguiente en nuestro terminal:


    
    
    <code>
    eval "$(ssh-agent -s)" && ssh-add ~/.ssh/id_rsa
    </code>
    



Con esto hemos agregado nuestra clave al pequeño programa ssh-agent para que administre nuestras llaves por nosotros. Lo que quiere decir es que tu sólo ingresaras tu clave una sola vez, y después de eso, ssh-agent mantendrá la clave en memoria y cada vez que sea requerida ssh-agent la entregará por nosotros y si todo nos fue bien nos saldrá algo como esto:


    
    
    <code>
    Agent pid 6026
    Identity added: /home/frontend/.ssh/id_rsa (/home/frontend/.ssh/id_rsa)
    </code>
    






## Agregando nuestra clave pública a Github



Primero instalamos xclip, para poder copiar el contenido de nuestra clave pública por consola.


    
    
    <code>
    sudo apt-get install xclip
    </code>
    



Luego seleccionamos y copiamos el contenido de nuestra clave pública con la siguiente línea de código:


    
    
    <code>
    xclip -sel clip < ~/.ssh/id_rsa.pub
    </code>
    



Con esto tenemos nuestra clave pública en el portapapeles, entonces ingresamos a Github, y En la sección [Settings](https://github.com/settings/profile) elegimos la opción [SSH Keys](https://github.com/settings/ssh) e ingresamos.

Hacemos click en el botón Add SSH Key(Agrega tu clave SSH).

En el campo **Title** escribimos algo descriptivo sobre esta clave y en el campo **Key** pegamos el contenido del archivo ~/.ssh/id_rsa.pub(contenido que tenemos en nuestro portapapeles listo para pegar).

Y luego hacemos click en el bóton Add Key, nos pedirá nuestra contraseña de Github para validar y listo.



## Validando nuestra clave SSH con Github



Para comprobar que todo anda bien, simplemente escribimos lo siguiente en nuestra terminal:


    
    
    <code>
    ssh -T git@github.com
    </code>
    



Si todo anda bien, debemos obtener lo siguiente:


    
    
    <code>
    Warning: Permanently added the RSA host key for IP address '178.10.123.50' to the list of known hosts.
    Hi jansanchez! You've successfully authenticated.
    </code>
    



Con esto ya tenemos registrada nuestra clave pública en github, lo cual nos permitirá subir cambios al servidor de Github creando una conexión segura.

Si deseas realizar la configuración básica de git te recomendamos leer el siguiente artículo: 
[Comandos básicos Git](https://frontendlabs.io/885--git-comandos-basicos-tutorial-espanol#git-config).




## Extra: Cómo "instalar" tu clave pública en una maquina remota



Para no estar poniendo siempre la clave del usuario de la pc a la que nos queremos conectar por ssh dejamos esta linea de código para que cuando te intentes conectar por ssh a una pc nunca más te pida la clave del usuario ya que la pc remota sabra que eres un usuario autorizado gracias a tu clave publica.


    
    
    <code>
    cat ~/.ssh/id_rsa.pub | ssh usuario@ip_remota "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
    </code>
    



Bueno eso es todo, espero que les haya servido de algo este pequeño artículo, no se olviden de enviar sus comentarios, compartir los posts en las redes sociales, Gracias.
