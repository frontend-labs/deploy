---
author: Carlos Huamani
comments: true
date: 2014-07-10 05:43:14+00:00
layout: post
link: https://frontendlabs.io/1162--tutorial-basico-de-python-parte-ii-colecciones-y-controles-de-flujo
slug: tutorial-basico-de-python-parte-ii-colecciones-y-controles-de-flujo
title: "Tutorial Básico de Python – Parte II : Colecciones y Controles de Flujo"
wordpress_id: 1162
categories:
  - Python
tags:
  - Código
  - Debian
  - Lenguaje de programación
  - Linux
  - Tutorial
---

En la [primera parte de este tutorial](https://frontendlabs.io/1122--tutorial-basico-de-python-i) aprendimos los operadores y los tipos básicos que existen en python.  Ahora en esta segunda parte aprenderemos las colecciones (listas, tuplas y  diccionarios) y los controles de flujo (condicionales y bucles).

### Colecciones

**Listas**

Las listas es una colección ordenada de elementos. Esta lista no restricciona el tipo de dato que se pueda ingresar. En otras palabras podemos tener una lista que contenga elementos de tipo cadena, entero, booleanos, decimales a la vez y sin ningun problema.

Las listas son representadas con corchetes '[..]'.  No es necesario indicar sus indices ya que este se hace de manera automática.

[sourcecode language="python"]

# Primera manera de declarar una lista

primera_lista = list()

# Otra manera de declarar una lista

segunda_lista = ['x', 'y', 'z']

# Tercera manera de declarar una lista

tercera_lista = []

# Agregar valores a la lista

primera_lista.append('a')
primera_lista.append('b')
primera_lista.append('c')
primera_lista.append('d')
primera_lista.append('e')
print primera_lista

# ['a', 'b', 'c', 'd', 'e']

# Seleccionar un elemento de la lista

print primera_lista[0]

# 'a'

# Seleccionar varios elementos de una lista

print primera_lista[2:]

# ['c', 'd', 'e']

# Seleccionar un rango de elementos de una lista

print primera_lista[1:3]

# ['b', 'c']

# Eliminar un elemento de la lista

del primera_lista[4]
print primera_lista

# print ['a', 'b', 'c', 'd']

#Otra manera de eliminar un elemento
primera_lista.remove('d')
print primera_lista

# print ['a', 'b', 'c']

# Obtener el indice de un elemento

primera_lista.index('b')

# 1

[/sourcecode]

**Tuplas**

Es muy similar a las listas sin embargo en este tipo de colección no se permite editar la coleccion despues de haber sido creado. Esto puede servir mucho cuando uno crea un archivo de configuración y desea que este no se vea alterado en un futuro ya que podría corromper al programa. Ademas las tuplas son mas ligeras y por ende mas rápidas que los diccionarios o listas.

[sourcecode language="python"]

# Primera manera de declarar una tupla

primera_tupla = ('a', 'b', 'c', 'd', 'e')

# Segunda manera de declarar una tupla

primera_tupla = 'a', 'b', 'c', 'd', 'e'

# Como es una tupla, y esta es inmutable no tiene los atributos remove ni append (osea no se puede eliminar sus items ni agregarse).

# Sin embargo si podemos seleccionar uno o varios elementos por su indice o viceversa

print primera_tupla[0]

# 'a'

print primera_tupla[1:2]

# ('b',)

print primera_tupla[0:2]

# ('a', 'b')

print primera_tupla[0:2]

# ('a', 'b')

[/sourcecode]

Si se preguntan porque al escribir primera_tupla[1:2] obtengo como resultado "('b',)" y no "('b')" es por el hecho que cuando solo un elemento se encuentra en paréntesis Python obvia los paréntesis. Es debido a esto que cuando necesitemos tener una tupla de un solo elemento se debe asignar con una coma despues del elemento sino no sera considerado como una tupla.

**Diccionarios**

[sourcecode language="python"]

# Primera manera de declarar un diccionario

primer_diccionario = dict()

# Segunda manera de declarar un diccionario

segundo_diccionario = {'key_1': 'valor_1','key_2': 'valor_2','key_3': 'valor_3','key_4': 'valor_4'}

# Tercera manera de declarar un diccionario

tercer_diccionario = {}

# Agregar nuevo valor al diccionario

primer_diccionario['otro_key'] = 'otro_valor'
print primer_diccionario

# {'otro_diccionario': 'otro_valor'}

# Mostrar el valor del diccionario

print primer_diccionario['otro_key']

# 'otro valor'

# Eliminar un valor del diccionario

del primer_diccionario['otro_key']
print primer_diccionario

# {}

[/sourcecode]

A diferencia de las dos anteriores este tipo de colección si nos permite asignar nuestras propias llaves al item.

### Condicionales

Para comenzar con las condicionales primero debemos entender tanto los operadores como las comparaciones que se usan con los valores booleanos.

<table >

<tr >
Operador
Descripción
Ejemplo
</tr>

<tbody >
<tr >

<td >and
</td>

<td >¿a y b son ciertos?
</td>

<td >result = True and False #result is False
</td>
</tr>
<tr >

<td >or
</td>

<td >¿a o b es cierto?
</td>

<td >result = True or False #result is True
</td>
</tr>
<tr >

<td >not
</td>

<td >No a
</td>

<td >result = not True #result is False
</td>
</tr>
<tr >

<td >==
</td>

<td >¿a y b son iguales?
</td>

<td >result = 1==1 #result is True
</td>
</tr>
<tr >

<td >!=
</td>

<td >¿a y b no son iguales?
</td>

<td >result = 1!=1 #result is False
</td>
</tr>
<tr >

<td > <
</td>

<td >¿a es menor que b?
</td>

<td >result = 1<2 #result is True
</td>
</tr>
<tr >

<td > >
</td>

<td >¿a es mayor que b?
</td>

<td >result = 1>2 #result is False
</td>
</tr>
<tr >

<td > <=
</td>

<td >¿a es menor o igual que b?
</td>

<td >result = 1<=2 #result is True
</td>
</tr>
<tr >

<td > >=
</td>

<td >¿a es mayor o igual que b?
</td>

<td >result = 1>=1 #result is True
</td>
</tr>
</tbody>
</table>

#### if

Es la condición mas simple que tiene el repertorio de Python.

[sourcecode language="python"]
if 1==1:
print '¡python es genial!'
[/sourcecode]

[sourcecode language="python"]
web='frontendlabs.io'
if web=='frontendlabs.io':
print '¡frontend-labs es genial!'
[/sourcecode]

** if ... else**

Esta condición indica que si no se cumple la condición del **if** pues se realizara la acción que tiene **else.** Es como decir** si** condición a se cumple haz la acción a **sino** la acción b.

[sourcecode language="python"]
condicion_a = True
if condicion_a is True:
print 'accion a'
else:
print 'accion b'
[/sourcecode]

** if ... elif...else**

En este tipo de condición se puede ver al "elif" como el clásico "else if". Esta condición primero evalúa la condición del if, en caso que sea falso procederá con el primer elif y en caso que este también sea falso procederá con el segundo elif y así sucesivamente hasta que una condición sea cierta o hasta que no hayas mas elif o hasta que se choque con un else.

[sourcecode language="python"]
condicion_a = False
condicion_b = False
condicion_c = True

if condicion_a is True:
print 'accion a'
elif condicion_b is True:
print 'accion b'
elif condicion_c is True:
print 'accion_c'
else:
print 'accion d'
[/sourcecode]

**Otras maneras de validar**
acción_a **if** Condición **else** acción_b, este tipo de condición indica que si C es verdadero pues hará la acción A sino realizará la acción B.

Condición **and** acción_a **or** acción_b, este tipo de realizar condiciones es parecido al primero. La única diferencia que hay entres estos dos es que en este la condición esta primero y si es cierto se ejecuta lo que esta después de **and**, osea la acción a. En caso que la condición sea falsa se procede a ejecutar la acción_b el cual esta ubicado después del operador **or.
**

[sourcecode language="python"]
ejemplo_1 = 'numero es uno' if (1==1) else 'numero no es uno'
print ejemplo_1
#numero es uno

ejemplo_2 = 1==1 and 'numero es uno' or 'numero no es uno'
print ejemplo_2
#numero es uno

[/sourcecode]

### Bucles

Los bucles repiten un pedazo de código hasta que cierta condición se cumple. Tenemos dos tipos de bucles **for** y **while**.

**for ... in**

Este bucle recorre una colección de elementos. Usualmente el bucle **for** es utilizado para recorrer listas.

[sourcecode language="python"]
frameworks = ['django', 'easy-test-selenium', 'scrapy']
for framework in frameworks:
print framework
#django
#easy-test-selenium
#scrapy
[/sourcecode]

**while**

Ejecuta un fragmento de código mientras la condición de esta se cumpla.

[sourcecode language="python"]
horas = 0
#Imprime las horas hasta que llegue a 24
while horas < 24:
horas += 1
print 'Ha transcurrido ' + str(horas) + ' hora(s)'
[/sourcecode]

Esto ha sido todo hasta en este turial de python - colecciones y controles de flujo. Si desean saber mas sobre el tema pueden visitar la [documentación oficial](https://docs.python.org/2.7/tutorial/controlflow.html) de python. [Para el próximo tutorial hablaremos de funciones.](https://frontendlabs.io/1257--tutorial-basico-de-python-parte-iii-funciones)
