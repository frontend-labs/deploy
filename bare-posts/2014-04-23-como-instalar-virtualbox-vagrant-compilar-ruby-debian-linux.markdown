---
author: jansanchez
comments: true
date: 2014-04-23 04:59:00+00:00
layout: post
link: https://frontendlabs.io/584--como-instalar-virtualbox-vagrant-compilar-ruby-debian-linux
slug: como-instalar-virtualbox-vagrant-compilar-ruby-debian-linux
title: Como instalar Virtualbox, Vagrant y compilar Ruby en Debian Linux
wordpress_id: 584
categories:
- Automatización
- Linux
tags:
- Automatización
- Debian
- Entornos de desarrollo
- Linux
- Ubuntu
---

Hoy vamos a instalar <a href="http://www.vagrantup.com/" target="_blank" title="Vagrant"><strong>Vagrant</strong></a> en nuestro Debian Linux, para esto necesitamos tener instalado previamente <a href="https://www.virtualbox.org/" target="_blank" title="Virtualbox"><strong>Virtualbox</strong></a>, así que lo vamos a instalar abriendo nuestro terminal y escribiendo lo siguiente.



[code lang="bash"]
sudo apt-get install virtualbox
[/code]


    
    Una vez finalizada la instalación de Virtualbox procedemos a instalar Vagrant escribiendo lo siguiente en nuestro terminal.



[code lang="bash"]
sudo apt-get install vagrant
[/code]


    
    Ahora vamos a compilar Ruby a partir de su código fuente, actualmente su versión estable es la 2.1.1.
    
    Abrimos nuestro terminal y nos dirigimos a la carpeta de descargas de la siguiente manera.



[code lang="bash"]
cd ~/downloads
[/code]


    
    Luego procedemos a descargar la <a href="https://www.ruby-lang.org/en/downloads/" target="_blank" title="Ruby Downloads">ultima versión de Ruby</a>:



[code lang="bash"]
wget -v http://cache.ruby-lang.org/pub/ruby/2.1/ruby-2.1.1.tar.gz
[/code]


    
    Y creamos la carpeta <em>applications</em>



[code lang="bash"]
mkdir ~/applications
[/code]


    
    Una vez que Ruby descargó por completo, entonces movemos el archivo descargado hacia la carpeta que hemos creado.



[code lang="bash"]
mv ~/downloads/ruby-2.1.1.tar.gz ~/applications
[/code]


    
    Ingresamos a nuestra nueva carpeta.



[code lang="bash"]
cd ~/applications
[/code]


    
    Y descomprimimos el archivo descargado.



[code lang="bash"]
tar -zxvf ruby-2.1.1.tar.gz
[/code]


    
    Cuando a terminado de descomprimir por completo, ingresamos a la carpeta <strong><em>ruby-2.1.1</em></strong>.



[code lang="bash"]
cd ruby-2.1.1
[/code]


    
    Configuramos



[code lang="bash"]
./configure
[/code]


    
    Compilamos



[code lang="bash"]
make
[/code]


    
    Instalamos



[code lang="bash"]
sudo make install
[/code]


    
    Por ultimo verificamos que tengamos todo correctamente instalado, primero verificamos la versión de Vagrant.



[code lang="bash"]
vagrant -v
[/code]


    
    Luego verificamos la versión de Ruby.



[code lang="bash"]
ruby -v
[/code]


    
    Y finalmente abrimos nuestro Virtualbox.



[code lang="bash"]
virtualbox
[/code]


    
    Y listo con esto ya tenemos instalado en nuestro Debian Linux <strong>Virtualbox</strong>, <strong>Ruby</strong> y <strong>Vagrant</strong>.
    
    Espero que este post les sirva para poder instalar cualquiera de estos 3 paquetes en Debian Linux.
