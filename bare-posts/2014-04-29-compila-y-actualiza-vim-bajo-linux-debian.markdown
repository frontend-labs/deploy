---
author: andru255
comments: true
date: 2014-04-29 04:13:27+00:00
layout: post
link: https://frontendlabs.io/615--compila-y-actualiza-vim-bajo-linux-debian
slug: compila-y-actualiza-vim-bajo-linux-debian
title: Compila y actualiza vim bajo linux/debian
wordpress_id: 615
categories:
  - Linux
  - Vim
tags:
  - Debian
  - Editores de texto
  - Linux
---

Hola, les traigo este fabuloso articulo traído desde mi [blog](http://http://blogdeandru.blogspot.com/), pero esta vez con un dato adicional, pues quieren saber de qué?

Pues bien, es fácil. En este post indico los pasos necesarios para que el editor leyenda llamado VIM funcione inclusive a nivel de consola y te brinde cosas alucinantes como desarrollador o persona natural que eres.
OJO, VIM es sólo un editor pero con superpoderes.

Existen distintas formas de instalar VIM en nuestros ordenadores, una de ellas (creo que es la más adecuada) es compilarlo. Este consiste en tomar el código fuente (lo ultimito de su repositorio) y generar el ejecutable listo para instalarlo!.

**Pasos para la instalación de VIM desde su código fuente**

Nota: Estoy bajo una distribución de linux/debian que se llama crunchbang y los pasos se llevaran en el terminal.

1. Nos ubicamos en el Home( o simbolo ~) para hacer lo necesario, e instalamos las dependencias:

[code lang="bash"]
\$ sudo apt-get install ncurses-dev build-essential mercurial
[/code]

2. Para tener en claro el repositorio de vim (donde está su código fuente) está bajo el sistema de versionamiento llamado mercurial y es por eso que realizamos esas descargas, pero hacemos la descarga de otros paquetes adicionales para el soporte de clipboard para vim, sin estos no podrían funcionar bien para cuando se usa el portapapeles del sistema:

[code lang="bash"]
\$ sudo apt-get install libx11-dev libxtst-dev xorg-dev
[/code]

3. Ahora viene lo bueno, que es hacer un clon del repositorio de vim en nuestra Home

[code lang="bash"]
~ \$ hg clone https://bitbucket.org/vim-mirror/vim vim 
[/code]

4. Luego de que nos tome unos minutos de haber descargado nos genera una carpeta llamada vim, ingresamos a la carpeta hija llamada src

[code lang="bash"]
~ \$ cd vim/src
[/code]

5. Una vez estando en esa carpeta hacemos una limpieza de la configuración predeterminada para compilar el codigo.

[code lang="bash"]
~/vim/src \$ make distclean
[/code]

6.  Esta línea de comando le indicamos a la configuración por defecto las cosas adicionales que tenga y generamos nuestro ejecutable:

[code lang="bash"]
~/vim/src \$ ./configure --with-features=huge --enable-pythoninterp --enable-rubyinterp --with-x --enable-gui
[/code]

7. Como punto final ejecutamos lo generado.

[code lang="bash"]
~/vim/src \$ sudo make install
[/code]

Como punto opcional ejecutamos esta linea para muchos casos poder actualizar la referencia que pudo haber tenido el editor o se haya instalado otro anteriormente

[code lang="bash"]
~/vim/src $ export PATH=/usr/local/bin:$PATH
[/code]

**Tiempo de actualización!
**Cuando pasado un tiempo queramos actualizar el vim, podemos hacer lo mismo claro, pero de esta manera:

8. Nos ubicamos en la carpeta vim que se clonó

[code lang="bash"]
~ \$ cd vim
[/code]

9. Traemos los últimos cambios con estos comandos

[code lang="bash"]
~/vim/src $ hg pull
~/vim/src $ hg update
[/code]

Y luego seguimos desde el paso 4 al final y tenemos actualizado de manera segura nuestro editor Vim.

Nota adicional:
Si quieres saber la última vez que haz compilado tu editor solo escribes en el terminal lo siguiente

[code lang="bash"]
~ \$ vim --version
[/code]

    Suerte en la compilación :D
