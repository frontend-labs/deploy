---
author: Carlos Huamani
comments: true
date: 2014-07-11 22:45:12+00:00
layout: post
link: https://frontendlabs.io/1257--tutorial-basico-de-python-parte-iii-funciones
slug: tutorial-basico-de-python-parte-iii-funciones
title: "Tutorial Básico de Python – Parte III : Funciones"
wordpress_id: 1257
categories:
  - Python
tags:
  - Código
  - Debian
  - Lenguaje de programación
  - Linux
  - Python
  - Tutorial
---

Siguiendo con los tutoriales de python, en este tutorial hablaremos de las funciones. Si desean ver el tema anterior a este pueden visitar[ nuestro tutorial parte II de python](https://frontendlabs.io/1162--tutorial-basico-de-python-parte-ii-colecciones-y-controles-de-flujo) el cual habla de colecciones y controles de flujos.

Se le llama función al fragmento de código el cual puede ser ejecutado cuando sea necesario por medio del nombre el cual se le haya asignado a este fragmento de código. A esta instrucción se le conoce con el nombre de **def** . Las funciones en python se definen de la siguiente manera.

[sourcecode language="python"]
def mi_funcion(param):
print param
[/sourcecode]

Para python los parámetros son opcionales. Además no tiene la necesidad de retornar algo, sin embargo si lo hiciese la estructura de la función no se vería alterada solo se agregaria un return al final del fragmento del código indicando lo que se desea retornar.

[sourcecode language="python"]
def mi_funcion():
resultado = 1 + 2
return resultado
[/sourcecode]

Como se puede visualizar solo se agrego un return. Ahora si se desea agregar parámetros pues como vemos más arriba estos se ubican entre los paréntesis. Por ejemplo mas abajo tenemos nuestra función 'multiplica_por_dos' que acepta un número como parámetro y retorna este número multiplicado por dos

[sourcecode language="python"]
def multiplica_por_dos(numero):
return numero\*2
[/sourcecode]

Como ves las funciones en python son bastante sencillas. Si deseamos ejecutar esta función basta con llamar el nombre de la función e indicar entre paréntesis el numero que sera enviado como parámetro.

[sourcecode language="python"]
multiplica_por_dos(3)

# 6

[/sourcecode]

Ahora si invocamos sin parámetro alguno a nuestra función 'multiplica_por_dos' nos lanzará un error

[sourcecode language="python"]
multiplica_por_dos()
Traceback (most recent call last):
File &amp;quot;&amp;lt;stdin&amp;gt;&amp;quot;, line 1, in &amp;lt;module&amp;gt;
TypeError: multiplica_por_dos() takes exactly 1 argument (0 given)
[/sourcecode]

En python es posible indicar que un parámetro sea opcional indicándole un valor por defecto. Para ello modificaremos nuestra función 'multiplica_por_dos' asignándole al parámetro 'numero' el valor dos como el valor por defecto.

[sourcecode language="python"]
def multiplica_por_dos(numero=2):
return numero\*2
[/sourcecode]

Ahora cuando invoquemos nuestra función sin parámetro alguno el parámetro 'numero' tendra el valor de dos y por ende nos devolverá cuatro, ya que 2 por 2 es 4.

[sourcecode language="python"]
multiplica_por_dos()

# 4

multiplica_por_dos(5)

# 10

[/sourcecode]

Nuestra función puede recibir mas que solo un parámetro.

[sourcecode language="python"]
def multiplica_numeros(a, b, c):
return a*b*c
[/sourcecode]

Si queremos llamar a esta función lo hacemos de la siguiente manera. Para este ejemplo enviaremos los parámetros 2, 3 y 6 el cual da como producto 36.

[sourcecode language="python"]
multiplica_numeros(2, 3, 6)

# da como resultado 36

# Tambien podemos indicarle el parametro al que va ir

multiplica_numeros(a=2, b=3, c=6)

# da como resultado 36

# La ventaja de esto es que el orden no importa

multiplica_numeros(c=6, b=3, a=2)

# da como resultado 36

[/sourcecode]

En python tenemos distintas maneras de asignar los parámetros a la función. Hasta ahora hemos usado el "método clásico" por así decirlo. Sin embargo existen otras maneras de hacerlo. Una de estas es enviarla por medio de una lista y el otro método es enviárselo por medio de un diccionario (si se desea saber mas acerca de listas y diccionario puedes entrar al [tutorial anterior a este](https://frontendlabs.io/1162--tutorial-basico-de-python-parte-ii-colecciones-y-controles-de-flujo)). Si queremos enviar una lista tenemos que enviar los parámetros en orden y la lista debe estar después de un asterisco.

[sourcecode language="python"]
#Tener presente que los parámetros de nuestra función 'multiplica_numeros' son a b y c
#Creamos nuestra lista en orden
parametros = list()
parametros.append(2) # Sera el parametro de a
parametros.append(3) # Sera el parametro de b
parametros.append(6) # Sera el parametro de c

# Para asignarle la lista a la funcion se debe agregar un asterisco

multiplica_numeros(\*parametros)

# La respuesta es 36

[/sourcecode]

Como lo habíamos mencionado, en python también podemos asignarle un diccionario como parámetro. A diferencia de la lista en este caso tu asignas el nombre de la llave y del valor y al momento de asignarlo a la función se le antepone el doble asterisco. Se debe tener en cuenta que el nombre de las llaves deben ser el nombre de los parámetros de la función.

[sourcecode language="python"]
#Tener presente que los parámetros de nuestra función 'multiplica_numeros' son a b y c
#Creamos nuestro diccionario con las llaves y valores correspondientes
parametros = dict()
parametros['a'] = 2 # Sera el parametro de a
parametros['b'] = 3 # Sera el parametro de b
parametros['c'] = 6 # Sera el parametro de c

# Para asignar el diccionario a la funcion se debe agregar dos asteriscos

multiplica_numeros(\*\*parametros)

# La respuesta es 36

[/sourcecode]

En python también podemos hace lo inverso a esto. Es decir, la función puede tener como parámetro una tupla o un diccionario. En este caso la tupla es representado por un asterisco y el diccionario por dos asteriscos. Al asignar este tipo de parámetro, estos deben ir al final.

[sourcecode language="python"]

# Para tener una tupla como parametro le asignamos un \*

def mi_funcion_con_tupla(parametro_1, \*tupla): # parametro_1 si es obligatorio
print parametro_1

    #Elementos opcionales
    for elemento in tupla:
        print elemento

[/sourcecode]

Pero... ¿Para que sirve esto? bueno la ventaja de tener este tipo de parámetro es que ahora nuestra función puede recibir los parámetros que uno desee.

[sourcecode language="python"]

# Para tener una tupla como parametro le asignamos un \*

mi_funcion_con_tupla('valor uno', 'otro_valor', 'y uno mas', 'y aqui tengo otro', 'otro mas')

# Esta funcion imprime lo siguiente&amp;lt;/pre&amp;gt;

# valor uno

# otro_valor

# y uno mas

# y aqui tengo otro

# otro mas

[/sourcecode]

Es importante recordar que los parámetros que recibe la tupla son opcionales si quiero no envío nada y si deseo envío mil parámetros. Obviamente nadie pasaría mil parámetros por una función.

[sourcecode language="python"]

# Sin enviar parametros a la tupla

mi_funcion_con_tupla('valor uno')

# Esta funcion imprime lo siguiente

# valor uno

# Enviando solo un parámetro a la tupla

mi_funcion_con_tupla('valor uno', 'tupla')

# Esta funcion imprime lo siguiente

# valor uno

# tupla

# Pero no podemos hacer esto ya que necesariamente recibe un parámetro

mi_funcion_con_tupla()
Traceback (most recent call last):
File &amp;quot;&amp;lt;stdin&amp;gt;&amp;quot;, line 1, in &amp;lt;module&amp;gt;
TypeError: mi_funcion_con_tupla() takes at least 1 argument (0 given)
[/sourcecode]

Esto sucede por que el primer parámetro no es parte de la tupla y es un parámetro obligatorio.

Ahora el diccionario funciona de manera similar. La Única diferencia es que ahora le puedes asignar una llave.

[sourcecode language="python"]

# Para tener una tupla como parametro le asignamos un \*

def mi_funcion_con_diccionario(\*\*diccionario):
print diccionario['parametro_1']
print diccionario['parametro_2'][/sourcecode]

Su funcionalidad es similar al de las tuplas al momento de llamar a la función salvo que esta vez si se puede asignar un nombre al parámetro.

[sourcecode language="python"]

# Para tener una tupla como parametro le asignamos un \*

mi_funcion_con_diccionario(parametro_1='valor_1', parametro_2='valor_2')

# Esta funcion imprime lo siguiente

# valor_2

# valor_3

[/sourcecode]

Recuerda que puedes usar los tres tipos de argumentos a la vez. El orden que para mi es mas agradable es poner primero los argumentos, luego la tupla de argumentos y finalmente el diccionario de argumentos. Se suele usar el nombre de \*args y \*\*kwargs para las tuplas y diccionarios respectivamente que serán usadas como parámetro.

Esto seria todo para este tercer tutorial de python. Si quieres mas información siempre puedes visitar la [documentación oficial](https://docs.python.org/2.7/tutorial/controlflow.html#defining-functions) de python. Para el próximo tutorial explicaremos[ los fundamentos básicos de la programación orientada a objetos](https://frontendlabs.io/1305--tutorial-basico-de-python-parte-iv-programacion-orientada-a-objetos).
