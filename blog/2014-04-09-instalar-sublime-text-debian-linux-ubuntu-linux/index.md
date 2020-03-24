---
author: jansanchez
comments: true
date: 2014-04-09 00:58:14+00:00
layout: post
path: /340--instalar-sublime-text-debian-linux-ubuntu-linux
slug: instalar-sublime-text-debian-linux-ubuntu-linux
title: Como instalar Sublime Text 2 en Debian Linux
wordpress_id: 340
categories:
  - Linux
tags:
  - crunchbang
  - Debian
  - elementary os
  - freya
  - Linux
  - luna
  - mint
  - Nodejs
  - Package Control
  - sublime text
  - Tutorial
  - Ubuntu
---

Sublime Text es un **editor de texto** sofisticado para **código**, **marcado**(markup) y **mucho más**. Te encantará su elegante interfaz de usuario, sus extraordinarias características  y su sorprendente rendimiento.

Si deseas saber más sobre este muy buen editor puedes visitar [su sitio web](http://www.sublimetext.com/), y si  ya lo tienes instalado pero **quieres darle más poder a tu editor** puedes pasar por nuestro post [Paquetes de Sublime Text para acelerar tu flujo de trabajo](https://frontendlabs.io/985--paquetes-de-sublime-text-para-acelerar-tu-trabajo).

**Sublime Text** puede ser descargado y evaluado de forma gratuita, la versión de evaluación te mostrará un alert o aviso la 5ta vez que salves algún archivo después de abrir el programa y luego no verás ese alert hasta la próxima vez que uses el editor. Pero actualmente no hay ningún límite de tiempo para la versión de evaluación.

Si tienes **Debian Linux**, Ubuntu Linux, Elementary OS Freya Linux o cualquier linux basado en Debian y deseas instalarlo, entonces manos a la obra!.

## Como instalar Sublime Text 2

Nuestro primer paso será descargar la última versión estable de Sublime Text por lo cual nos dirigiremos al siguiente enlace: [SublimeText 2](http://www.sublimetext.com/2) y a continuación tendremos la siguiente vista.

![Sublime Text 2 - Página de descarga](https://frontendlabs.io/wp-content/uploads/2014/04/st2-download-page.png)

La página de Sublime Text nos indicará la versión ideal para nuestro **Sistema Operativo**, en mi caso sale seleccionada la opción **Linux 64 bit**, la descargaremos haciendo click sobre la opción que deseemos.

Al completar la descarga tendremos el siguiente archivo: **Sublime Text 2.0.2 x64.tar.bz2** en nuestra carpeta local: **downloads**, así que ingresamos a ella con el siguiente comando:

```
cd ~/downloads
```

**Descomprimimos** el archivo descargado.

```
tar -jvxf Sublime\ Text\ 2.0.2\ x64.tar.bz2
```

Y luego **movemos** la carpeta Sublime Text 2 dentro de la carpeta **/opt/**

```
sudo mv Sublime\ Text\ 2 /opt/
```

Creamos un **enlace simbólico** del ejecutable **sublime_text** dentro de la carpeta **/usr/bin**

```
sudo ln -s /opt/Sublime\ Text\ 2/sublime_text /usr/bin/sublime
```

Ahora escribimos **"sublime"** en nuestro terminal.

```
sublime
```

Con esto se abrirá por primera vez nuestro nuevo editor.

Ahora creamos un lanzador, dentro de la carpeta **/usr/share/applications**

```
sudo sublime /usr/share/applications/sublime.desktop
```

Se abrirá nuestro editor, agregaremos el siguiente código, guardamos los cambios y cerramos nuestro Sublime Text 2.

```
[Desktop Entry]
Version=2.0.2
Name=Sublime Text 2
GenericName=Text Editor

Exec=sublime
Terminal=false
Icon=/opt/Sublime Text 2/Icon/48x48/sublime_text.png
Type=Application
Categories=TextEditor;IDE;Development
X-Ayatana-Desktop-Shortcuts=NewWindow

[NewWindow Shortcut Group]
Name=New Window
Exec=sublime -n
TargetEnvironment=Unity
```

Y con esto hemos terminado de instalar completamente Sublime Text 2.

## Como instalar paquetes de Sublime Text 2

Ingresamos a nuestro terminal y escribimos lo siguiente

```
cd ~/downloads
```

```
wget -v https://packagecontrol.io/Package\ Control.sublime-package
```

Con esto hemos ingresado a la carpeta **~/downloads** y hemos descargado el **Administrador de paquetes** de Sublime Text 2, ahora moveremos el Administrador de paquetes a su ruta correspondiente.

```
mv Package\ Control.sublime-package ~/.config/sublime-text-2/Installed\ Packages/
```

Con esto hemos instalado el Administrador de paquetes de Sublime Text 2 y vamos a probarlo instalando los paquetes para Jade, Stylus y CoffeeScript. Para esto abrimos nuestro sublime y presionamos la combinación de teclas **Ctrl + Shift + p** y a continuación nos mostrará la siguiente vista, en la cual escribiremos **install package** y presionaremos la tecla Enter.
![install_packages](https://frontendlabs.io/wp-content/uploads/2014/04/install_packages.png)
Luego veremos una lista de paquetes de Sublime Text 2 para instalar, para nuestro ejemplo escribiremos **Jade **y lo seleccionamos y le hacemos click o presionamos la tecla Enter para instalarlo.
![install_jade_in_sublime](https://frontendlabs.io/wp-content/uploads/2014/04/install_jade_in_sublime.png)
Con esto ya tenemos instalado el soporte para Jade Language en nuestro Sublime Text, la instalación es muy rápida(alrededor de 5 segundos) y la barra inferior izquierda de Sublime Text nos avisará con un mensaje casi imperceptible cuando haya instalado nuestro nuevo paquete correctamente.

Para instalar el paquete para Stylus y CoffeeScript, repetimos los mismos pasos que para Jade. Con esto hemos aprendido a instalar y administrar mejor nuestro sublime, que tiene muchos [plugins](https://frontendlabs.io/985--paquetes-de-sublime-text-para-acelerar-tu-trabajo), snippets y una infinidad de paquetes listos para instalar y para finalizar espero que les haya servido en algo este articulo!

Si deseas instalar NodeJs para usar Jade, Stylus, CoffeeScript y la infinidad de Módulos NPM que tiene, puedes pasar por el siguiente post sobre [Como instalar Nodejs en Debian Linux](https://frontendlabs.io/232--como-instalar-nodejs-en-linux-debian).
