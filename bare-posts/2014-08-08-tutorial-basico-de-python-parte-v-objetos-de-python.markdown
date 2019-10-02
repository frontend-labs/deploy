---
author: Carlos Huamani
comments: true
date: 2014-08-08 17:00:50+00:00
layout: post
link: https://frontendlabs.io/1463--tutorial-basico-de-python-parte-v-objetos-de-python
slug: tutorial-basico-de-python-parte-v-objetos-de-python
title: "Tutorial Básico de Python – Parte V : Funciones Básicas"
wordpress_id: 1463
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

Siguiendo con los tutoriales de python, hoy veremos con más profundidad los diccionarios, listas y cadenas. Puesto que en el [tutorial anterior hablamos de la programación orientada a objetos](https://frontendlabs.io/1305--tutorial-basico-de-python-parte-iv-programacion-orientada-a-objetos), ya estamos en el nivel de profundizar más en lo que son los objetos básicos que tiene python para entender las distintas maneras de poder manipular elementos de colección o cadenas. En mi opinión es importante presentar estas funciones ya que ayuda mucho al momento de programar en python.

Para python tanto las cadenas y tuplas tienen ciertas caracteristicas parecidas. Por el hecho que son iterables e inmutables, es decir pueden ser utilizadas en un bucles para recorrer sus elementos (en el caso de las cadenas se itera sus carácteres) y estas no pueden se modificadas.

### Cadenas

Declaramos la cadena a probar

[sourcecode language="python"]
cadena = 'hola mundo!'
[/sourcecode]

**C.endswith(str)**

[sourcecode language="python"]
cadena.endswith('!')

# True

cadena.endswith('o!')

# True

[/sourcecode]

**C.find(str)**, devuelve el indice de la primera incidencia encontrada. Si no lo encuentra devuelve -1.

[sourcecode language="python"]
cadena.find('H')

# 0

cadena.find('o!')

# 10

cadena.find('op')

# -1

[/sourcecode]

**C.isalnum()**, Verifica que la cadena sea alfanumerica

[sourcecode language="python"]
cadena.isalnum()

# False

'abc123'.isalnum()

# True

'abc'.isalnum()

# True

'123'.isalnum()

# True

[/sourcecode]

**C.isalpha()**, Verifica que la cadena sea alfabética.

[sourcecode language="python"]
cadena.isalpha()

# False

'abc123'.isalpha()

# False

'abc'.isalpha()

# True

'123'.isalpha()

# False

[/sourcecode]

**C.isdigit()**, Verifica que la cadena es un digito.

[sourcecode language="python"]
cadena.isdigit()

# False

'abc123'.isdigit()

# False

'abc'.isdigit()

# False

'123'.isdigit()

# True

[/sourcecode]

De la misma manera python tiene mas funciones como "isupper()", para verificar si toda la cadena esta en mayúsculas; "islower()", para constatar que toda la cadena esta en minúscula; "istitle(), verifica que tenga el formato de un titulo" y finalmente "isspace()", valida que la cadena enviada contenga solo espacios.

**C.count(str)**, esat función de python cuenta el numero de veces que se repite un caracter en especifico.

[sourcecode language="python"]
cadena.count('!')

# 1

cadena.count('o')

# 2

cadena.count('z')

# 0

[/sourcecode]

**C.join(str)**, devuelve una cadena de texto concatenada.

[sourcecode language="python"]
','.join('123')

# 1,2,3

'-'.join('abc')

# a-b-c

[/sourcecode]

**C.split(sep)**, devuelve una lista la cual es divida por la cadena sep. En caso que no se pueda dividir devuelve la lista con un solo elemento.

[sourcecode language="python"]
'a-b-c'.split('-')

# ['a', 'b', 'c']

'1, 2, 3'.split(',')

# ['1', '2', '3']

'a-b-c'.split('z')

# ['a-b-c']

[/sourcecode]

**C.replace(old, new)**, devuelve el remplazo de la cadena old a new de la cadena C.

[sourcecode language="python"]
cadena.replace('!', '?')

# hola mundo?

[/sourcecode]

### Listas

Declaramos una lista según la sintaxis aprendida en tutoriales anteriores.

[sourcecode language="python"]
lista = list()
[/sourcecode]

**L.append(item)**, agrega un item a la lista.

[sourcecode language="python"]
lista.append('a')
print lista

# ['a']

[/sourcecode]

**L.extend(element)**, agrega los elementos a las listas.

[sourcecode language="python"]
lista.extend('b')
print lista

# ['a', 'b']

[/sourcecode]

Seguro dirán que "extend" trabaja igual que "append", pues no, no es asi. Analizemos, ¿Qué pasaria si... le envío como parámetro una lista? Observemos

[sourcecode language="python"]
nueva_lista = ['y', 'z']
lista.extend(nueva_lista)
print lista

# ['a', 'b', 'y', 'z']

lista.append(nueva_lista)
print lista

# ['a', 'b', 'y', 'z', ['y', 'z']]

[/sourcecode]

Si logran apreciar detalladamente, entenderán que al usar la función **extend** lo que logramos es añadir los elementos de la **nueva_lista** a la **lista** que tenemos actualmente. Sin embargo al usar la función **append** añadimos la **nueva_lista** a la **lista** que tenemos actualmente.

Para que quede claro la diferencia entre estas dos funciones agregaremos la cadena 'item' y veamos que sucede.

[sourcecode language="python"]
lista.extend('item')
print lista

# ['a', 'b', 'y', 'z', ['y', 'z'], 'i', 't', 'e', 'm']

lista.append(nueva_lista)
print lista

# ['a', 'b', 'y', 'z', ['y', 'z'], 'i', 't', 'e', 'm', 'item']

[/sourcecode]

La función **extend** toma la cadena y lo itera como si fuera una lista. Mientras que **append** solo añade la palabra.

**L.insert(pos, item)**, Inserta a la lista el item en la posicion indicada.

[sourcecode language="python"]
lista.insert(0, 'primer_elemento')
print lista

# ['primer_elemento', 'a', 'b', 'y', 'z', ['y', 'z'], 'i', 't', 'e', 'm']

[/sourcecode]

**L.pop(index)**, devuelve el valor que se encuentra en ese indice y luego elimina dicho elemento de la lista.

[sourcecode language="python"]
elemento_retornado = lista.pop(0)

print lista

# ['a', 'b', 'y', 'z', ['y', 'z'], 'i', 't', 'e', 'm']

print elemento_retornado

# 'primer_elemento'

[/sourcecode]

**L.reverse()**, invierte la lista que invoca esta función.

[sourcecode language="python"]
lista.reverse()
print lista

# ['m', 'e', 't', 'i', ['y', 'z'], 'z', 'y', 'b', 'a']

print elemento_retornado

# 'primer_elemento'

[/sourcecode]

**L.sort(cmp=None, key=None, reverse=False)**, se encarga de ordenar la lista.

[sourcecode language="python"]
lista.sort()
print lista

# [['y', 'z'], 'a', 'b', 'e', 'i', 'm', 't', 'y', 'z']

lista.sort(reverse=True)
print lista

# ['z', 'y', 't', 'm', 'i', 'e', 'b', 'a', ['y', 'z']]

[/sourcecode]

El parámetro **cmp** debe ser una función el cual reciba como parámetro dos valores x e y de la lista y que retorne -1 si x es menor que y, 0 si son iguales y 1 si x es mayor que y.

Finalmente, el parámetro **key** debe ser una función que tome un elemento de la lista y devuelva el elemento suplente que sera utilizado para evaluar los elements de la lista.

### Diccionarios

Declaramos el diccionario a utilizar

[sourcecode language="python"]
diccionario = {'key_a':'value_1', 'key_b': 'value_2'}
[/sourcecode]

**D.get(key)**, sirve para obtener el valor de una elemento en especifico usando su key como intermediario.

[sourcecode language="python"]
print diccionario.get('key_a')
'value_1'
[/sourcecode]

Esto funciona muy similar a esto : "diccionario['key_a']". Esto devolveria lo mismo que la funciona antes mencionada. Entonces.. ¿Cuál es la diferencia? La diferencia esta en que la función get puede obtener un valor por defecto para el valor buscado.

[sourcecode language="python"]
print diccionario.get('key_c', 'no tengo este valor')
'no tengo este valor'

# mientras que con el otro

print diccionario['key_c']
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
KeyError: 'key_c'
[/sourcecode]

**D.has_key(key)**, Devuelve un boolean indicando si la llave se encuentra en dicho diccionario. Es lo mismo que indicar " 'element' in diccionario ".

[sourcecode language="python"]
print diccionario.has_key('key_a')

# True

print diccionario.has_key('value_1')

# False

print 'key_a' in diccionario

# True

[/sourcecode]

**D.items()**, esta función nos devuelve una lista de tuplas con los elementos del diccionario en pares de clave-valor.

[sourcecode language="python"]
print diccionario.items()

# [('key_a', 'value_1'), ('key_b', 'value_2')]

[/sourcecode]

**D.keys()**, devuelve una lista con todas las llaves del diccionario.

[sourcecode language="python"]
print diccionario.keys()

# ['key_a', 'key_b']

[/sourcecode]

**D.values()**, devuelve una lista con todas las valores del diccionario.

[sourcecode language="python"]
print diccionario.keys()

# ['value_1', 'value_2']

[/sourcecode]

**D.pop(key)**, devuelve el valor de la llave y lo elimina del diccionario

[sourcecode language="python"]
valor = diccionario.pop('key_a')

print diccionario

# {'key_b': 'value_2'}

print valor

# 'value_1'

# Podemos agregar un mensaje si no se encuentre la llave

valor = diccionario.pop('key_c', 'no se encuentra')
print valor

# no se encuentra

print diccionario

# {'key_b': 'value_2'}

[/sourcecode]

Esto ha aqui ha llegado el tutorial de python de hoy. Espero que les sea de utilidad. En todo caso si desean profundizar en el tema pueden visitar la [documentación oficial de python](https://docs.python.org/2/tutorial/datastructures.html) donde explica a detalle estas estructuras. Para el próximo tutorial de pyhton en español hablaremos de la programación funcional, un tema muy interesante ya que aprenderemos como podemos comprimir listas en python.
