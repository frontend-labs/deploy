---
author: renan
comments: true
date: 2016-02-29 22:46:52+00:00
layout: post
link: https://frontendlabs.io/2989--tips-git-en-windows
slug: tips-git-en-windows
title: Tips Git en Windows (Como si fuera Linux)
wordpress_id: 2989
categories:
- .Net
- Git
- Linux
- tutorial
- windows
tags:
- .Net
- Git
- Resolver Conflictos
- Windows
- WinMerge
---

         

La tech de este post les enseñare a sacarle el jugo a [git ](//frontendlabs.io/?s=git)en Windows y podrás gozar de los beneficios de esta útil herramienta como si estuvieras en Linux.


          

La necesidad fue que un equipo de desarrollo .NET necesitaba usar [git ](//frontendlabs.io/?s=git)y no podía usar Linux por el entorno nativo en el que se encontraba.


          

En este post explicaré las tech en Windows para:
            


              
  * Instalación correcta

              
  * Resolviendo conflictos

              
  * Configurar los alias

              
  * Olvídate de escribir el nombre de la rama

            
          

  

          

## Instalación correcta


          

Bajamos del sitio oficial la versión de  [git para Windows](//git-scm.com/download/win)


          

Instalamos siguiendo los pasos del asistente como un programa común  [(MSI) ](//es.wikipedia.org/wiki/Windows_Installer)hasta el sexto paso y elegimos la segunda opción: "Use git from the windows Command Prompt"

![](https://frontendlabs.io/wp-content/uploads/2016/02/2016-02-10_12-26-38.jpg)  
  

          

Esto te permitirá usar comandos de Linux que en esta versión mejorada podrás ejecutar comandos que en el [MS-DOS ](//es.wikipedia.org/wiki/MS-DOS)hacías como:


          
    
    <code>ll # Listar directorio --> 'dir'
    ls # Listar directorio en paralelo --> 'dir /w'
    cl # Limpiar pantalla --> 'cls'
    mkdir # Crear directorio --> 'mkdir' o 'md'
    pwd # Mostrar ubicación actual --> 'chdir'
    touch archivo.md # crear archivo --> 'type NUL > archivo.md'
    rm # Borrar -->  'del'
    mv # Mover --> 'move'
    cp # Copiar --> 'copy'
    # Y muchos otros más, menos sudo xD.
    </code>


          

A continuación marcamos la opción  “Checkout Windows-style, commit Unix-style line endings”  

![](https://frontendlabs.io/wp-content/uploads/2016/02/2016-02-10_12-27-23.jpg)  
  

          

Esto hará que [git ](//frontendlabs.io/?s=git)se encargue de la conversión de los saltos de línea en los archivos de texto para evitar mensajes de advertencia cuando desarrollamos entre Linux y Windows de manera colaborativa.


          

Ahora podemos abrir la consola del git llamado bash, haciendo clic en Inicio > Programas > Git Bash o directamente:


![](https://frontendlabs.io/wp-content/uploads/2016/02/2016-02-25_18-07-39.jpg)  
  

          

La consola nos permitirá interactuar con el control de versiones y ver de manera óptima qué es lo que está pasando, teniendo un mejor control sobre nuestros archivos.

![](https://frontendlabs.io/wp-content/uploads/2016/02/2016-02-29_11-12-32.jpg)  
  

          

Ya estamos listos para gestionar con [git](//frontendlabs.io/?s=git), para comprobar esto revisamos la versión en la consola


          
    
    <code>$ git version
    </code>


          

Y nos retornará la versión actual instalada.


          

## Resolviendo Conflictos 


          

En nuestro caso [git ](//frontendlabs.io/?s=git)para windows no trae una herramienta visual que nos ayude a resolver conflictos, pero con estos pasos podremos hacerlo de manera rápida y sencilla:


          


            
  1. Descargar e instalar el  [Meld ](http://meldmerge.org/)

            
  2. Editar el archivo .gitconfig de nuestro usuario, puedes hacerlo desde la ruta ubicada en C:\Users\TuNombreDeUsuario\ 

            
  3. Agregar después de la configuración de las ramas, para nuestro caso usaremos Windows 8.1 de 64 bits (Puedes pegar el siguiente gist).  



            
  4. Reiniciar el bash y ahora cuando tengas un conflicto a resolver puedes usar el comando  
$ git mergetool   


          
          

#### Ahora vamos a poner en prueba la teoría


          

En el caso que ocurra algún conflicto ya estaremos listos para resolverlo. En esta prueba vamos a jalar desde otra rama para provocar un conflicto (nos equivocamos a propósito).


          
    
    <code>$ git pull origin dev
    </code>


          

Entonces aparecera el conflicto:


          
    
    <code>remote: Counting objects: 100, done.
    remote: Compressing objects: 100% (98/98), done.
    Remote: Total 100 (delta 48), reused 0 (delta 0), pack-reused 0
    Receiving objects: 100% (100/100), 15.56 KiB | 0 bytes/s, done.
    Resolving deltas: 100% (48/48), done.
    From github.com:renaco/blog
    	* branch            dev        -> FETCH_HEAD
    	+ b54f69f...a58c936 dev        -> origin/dev  (forced update)
    Auto-merging index.html
    CONFLICT (add/add): Merge conflict in index.html
    Auto-merging gulpfile.js
    CONFLICT (add/add): Merge conflict in gulpfile.js
    Auto-merging css/main.css
    CONFLICT (add/add): Merge conflict in css/main.css
    Auto-merging _scss/main.scss
    CONFLICT (add/add): Merge conflict in _scss/main.scss
    Auto-merging _layouts/post.html
    CONFLICT (add/add): Merge conflict in _layouts/post.html
    Auto-merging _layouts/default.html
    CONFLICT (add/add): Merge conflict in _layouts/default.html
    Auto-merging _config.yml
    CONFLICT (add/add): Merge conflict in _config.yml
    Auto-merging .gitignore
    CONFLICT (add/add): Merge conflict in .gitignore
    Automatic merge failed; fix conflicts and then commit the result.
    </code>


          

Revisamos el estado
            
    
    <code>$ git status</code>


          


          

Nos debe salir la lista de los archivos en conflicto:
            
    
    <code>On branch dev
    Your branch is ahead of 'origin/gh-pages' by 2 commits.
    	(use "git push" to publish your local commits)
    You have unmerged paths.
    	(fix conflicts and run "git commit")
    
    Changes to be committed:
    
    		new file:   README.md
    		new file:   _posts/2014-04-20-welcome-to-jekyll.markdown
    
    Unmerged paths:
      (use "git add <file>..." to mark resolution)
    
    		both added:      .gitignore
    		both added:      _config.yml
    		both added:      _layouts/default.html
    		both added:      _layouts/post.html
    		both added:      _scss/main.scss
    		both added:      css/main.css
    		both added:      gulpfile.js
    		both added:      index.html
    </code>


          


          

Ahora procedemos a resolver el conflicto con el comando:
            
    
    <code>$ git mergetool
    </code>


          


          

Nos saldrá la lista de archivos a resolver 
            
    
    <code>Merging:
    .gitignore
    _config.yml
    _layouts/default.html
    _layouts/post.html
    _scss/main.scss
    css/main.css
    gulpfile.js
    index.html
    
    Normal merge conflict for '.gitignore':
      {local}: created file
      {remote}: created file
    .gitignore seems unchanged.
    Was the merge successful? [y/n] n
    merge of .gitignore failed
    Continue merging other unresolved paths (y/n) ?
    </code>


          


          

Y nos preguntará para resolverlos, obviamente que sí; entonces presionamos [Enter]


          

Automáticamente nos ejecutará el [Meld ](http://meldmerge.org/) pidiéndonos comparar las diferencias entre local, remoto y el resultado en el centro


          

Vamos igualando las diferencias entre los archivos, la idea es que se comparen e igualen dando como resultado el archivo final a confirmar.

  
  

![](http://romeroruiz.com/images/2016-06-24_15-18-27.jpg)  
  

          

Guardamos todo, cerramos y estamos listos para el siguiente conflicto. Cada una de estas resoluciones agregará automáticamente a la cola del commit.




Puedes ver un demo en youtube de la acción tomada:


  
  

          

<blockquote>
            
> 
> Con estos pasos resolverás conflictos de manera fácil y rápida sin equivocarte, obviamente consultando con tus compañeros desarrolladores y sentirás que [git ](//frontendlabs.io/?s=git)es tu amigo.
> 
> 
          </blockquote>


          

## Configurar los alias


          

En Linux la configuración del alias es por medio del .bash_profileen el caso de Windows es de la misma manera:


          

Simplemente tienes que crear en la ruta C:\Users\TuNombreDeUsuario\ el archivo:.bash_profile conteniendo los alias:
            
    
    <code>alias gs='git status '
    alias ga='git add '
    alias gb='git branch '
    alias gc='git commit -m '
    alias gg='git grep '
    alias gl='git log '
    alias gd='git diff '
    alias gck='git checkout '
    </code>


          


          

Por ejemplo:   
Cada vez que hagas $ gs significa que harás un $ git status   
Si haces un $ ga significa que harás un$ git add y así sucesivamente. Con esto ahorraras tiempo en gestionar el sistema de versionamiento.  



          

## Olvídate de escribir el nombre de la rama


          

[Git ](//frontendlabs.io/?s=git)nos permite guardar funciones que ejecutan comandos repetidos, para este caso ya no escribiremos los conocidos comandos en cada rama:
            
    
    <code>$ git pull origin master
    $ git pull origin development
    $ git push origin development
    </code>


          


          

Para evitar esto agregamos esta una función hecha por [@frontend_3](//twitter.com/frontend_3), simple en nuestro archivo .bash_profileubicado en  C:\Users\TuNombreDeUsuario\  lo siguiente:
            
          


          

Ahora podrás usar este alias que te ayudará en tu día a día sin equivocarte con el nombre de la rama donde estas trabajando:
            
    
    <code>$ gpull
    git pull origin master # internamente apunta a la rama master
    </code>


          


          

Y también puedes empujar cambios obviamente después de hacer el commit
            
    
    <code>$ gpush
    git push origin master # internamente apunta a la rama master
    </code>


          


          

No hay excusa para no usar alias sabiendo que te ayudarán a agilizar tus procesos.


          

Con estos tips espero ayudar en tu desarrollo y agilizar el día a día para aprovechar el tiempo para mayor felicidad tuya.


          

No olviden compartir y recomendar en las redes. Si tienes alguna duda consulta, queja o sugerencia no dudes en hacerla que estaremos gustosos de responderla.


          

¡Muchas gracias! 


          

## Referencias bibliográficas


          

MANUAL BATCH. _Manual batch_[En línea] [Fecha de consulta: 12 de Febrero del 2016].   
Disponible en: [Cómo crear un archivo vacío en la línea de comandos?](http://www.iteramos.com/pregunta/13288/como-crear-un-archivo-vacio-en-la-linea-de-comandos).


          

Función Bash. _Bash para git pull y push en branch actual_[En línea] [Fecha de consulta: 6 de Julio del 2015].   
Disponible en: [Bash para git pull y push en branch actual](https://gist.github.com/emanrique/360d9f15657139adba00).
          
