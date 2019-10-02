---
author: Carlos Huamani
comments: true
date: 2014-06-20 20:49:46+00:00
layout: post
link: https://frontendlabs.io/887--pruebas-funcionales-con-python-y-selenium
slug: pruebas-funcionales-con-python-y-selenium
title: "Selenium para las Pruebas Funcionales con Python  "
wordpress_id: 887
categories:
  - Automatización
  - Python
tags:
  - Automatización
  - Código
  - Pruebas funcionales
  - Python
---

En términos simples, las pruebas funcionales se encargan de constatar que la funcionalidad del sistema este de acuerdo a lo solicitado. Estas pruebas son conocidas también como pruebas de caja negra, ya que solo se encargan de verificar que todo funcione bien sin importar el código detrás de este. Para dichas pruebas tenemos diversas herramientas y una de estas es Selenium.

## ¿Qué es Selenium y cómo instalarlo?

Selenium automatiza los pasos que uno hace en los navegadores. Por ejemplo, Selenium puede guardar un script con los pasos que uno realiza en un registro de usuario y luego usarlo para repetir dichos pasos las veces que se desee  en el navegador que se desee de manera automática.

Para instalar Selenium IDE se debe abrir **Firefox** y [hacer clic a este enlace](http://release.seleniumhq.org/selenium-ide/2.5.0/selenium-ide-2.5.0.xpi) en caso de hacerlo en otro navegador descargará el addon y no lo instalará como debe ser. Puede entrar a la web de [Selenium](http://docs.seleniumhq.org/download/) e instalarlo según lo que usted necesite.

Si has hecho clic en el addon y también en la opción "allow/permitir" que aparece en la parte superior izquierda de tu navegador te saldrá una ventana como la que se muestra a continuación.

[![1 instalar selenium](https://frontendlabs.io/wp-content/uploads/2014/06/1_instalar_selenium.png)](https://frontendlabs.io/wp-content/uploads/2014/06/1_instalar_selenium.png)

Luego de la instalación, un icono aparecerá al lado derecho del navegador que dice 'Se' en color blanco.

[![2 instalar selenium](https://frontendlabs.io/wp-content//uploads/2014/06/2_instalar_selenium-e1403219799269.png)](https://frontendlabs.io/wp-content/uploads/2014/06/2_instalar_selenium-e1403219799269.png)

Finalmente, si logran visualizar este icono la instalación de Selenium IDE ha sido exitosa.

## ¿Como usar Selenium IDE?

En primer lugar, debes dirigirte a la página web que quieras automatizar. Luego, se hace clic en el icono de Selenium IDE y aparecerá un cuadro como el que se muestra a continuación el cual ya se encuentra capturando las acciones que realices en la pagina seleccionada.

[![3 instalar selenium](https://frontendlabs.io/wp-content/uploads/2014/06/3_instalar_selenium1.png)](https://frontendlabs.io/wp-content/uploads/2014/06/3_instalar_selenium1.png)

A continuación, se debe empezar a realizar las acciones que se  desee registrar en el navegador. Finalmente, al visualizar de nuevo la ventana del Selenium IDE obtendremos algo parecido a lo siguiente.

[![4 instalar selenium](https://frontendlabs.io/wp-content//uploads/2014/06/4_instalar_selenium.png)](https://frontendlabs.io/wp-content/uploads/2014/06/4_instalar_selenium.png)

Podemos observar que se ha registrado las acciones realizadas en la página. Ahora hacemos clic en el circulo rojo para detener la grabación y guardamos la prueba funcional realizada.

## ¿Cómo se usa Python con Selenium?

En caso que no conozcan mucho de python pueden revisar el[ tutorial básico de python](https://frontendlabs.io/1122--tutorial-basico-de-python-i).

Antes de comenzar se debe ejecutar la siguiente linea de comando en la consola.

[sourcecode language="bash"]
sudo apt-get install python-pip
sudo pip install selenium
[/sourcecode]

El objetivo de este paso es verificar que se están mostrando todos los mensajes de errores correspondientes a cada campo según el valor ingresado.

Primero debemos exportar el archivo que creamos en el Selenium IDE desde File / Export Test Case as / Python 2 - Unitest - WebDriver y le asignaremos el nombre de **test_case.py**

Luego de tener nuestro script, el siguiente paso es reutilizarlo y en base a este crear todos los escenarios posibles que necesiten ser probados. En este caso crearemos una lista con todos los valores a ser probados con su mensaje de error correspondiente.

Para agilizar el proceso de creación de registros a ser probados dentro del formulario se puede utilizar la siguiente clase.

[sourcecode language="python"]

# -_- coding: utf-8 -_-

class CreateForm():
def **init**(self, fields):
self.fields = dict()
self.fields['is_error'] = False
for key in fields.keys():
self.fields[key] = fields[key]
self.errors = list()

    def addError(self, item, message, value):
        assert item in self.fields.keys(), "The item '%s' was not found in key's dict" % item
        error = dict()
        error['location'] = item
        error['message'] = message
        error['value'] = value
        self.errors.append(error)

    def getList(self):
        registers = list()
        c = 1
        for error in self.errors:
            register = dict()
            for item in self.fields.keys():
                register[item] = self.fields[item]
            register['cod'] = 'test_%d' % c
            register[error['location']] = error['value']
            register['is_error'] = True
            register['error'] = error
            registers.append(register)
            c += 1
        return registers

[/sourcecode]

La clase se debe guardar con el nombre de **form_test.py.** Luego creamos otro archivo con el nombre de **form_keys\*\***.py \*\*en el cual se ingresará los id's de los campos del formulario.

[sourcecode language="python"]

# -_- coding: utf-8 -_-

FIELD_NAME = 'txtName'
FIELD_LASTNAME = 'txtLastName'
FIELD_EMAIL = 'txtEmail'
FIELD_PASSWORD = 'txtPassword1'
FIELD_CONFIRM = 'txtRepeatPassword'
FIELD_DOCUMENT = 'txtDocument'
SELECT_DOCUMENT = 'selDocument'
SUBMIT_REGISTER = 'sbmRegister'
[/sourcecode]

Ahora creamos el archivo **form_input_data.py** en el cual registraremos los valores por defecto que tendrá el formulario y los errores que se van a verificar.

[sourcecode language="python"]

# -_- coding: utf-8 -_-

from form_keys import \*
from form_test import CreateForm

# Declaro mensajes a repetirse

MESSAGE_REQUIRED = u'Este campo es requerido.'
MESSAGE_MAX = u'La longitud máxima es de %d caracteres.'
MESSAGE_MIN = u'La longitud mínima es de %d caracteres.'
MESSAGE_ONLY_NUMBERS = u'Ingrese solo números.'
MESSAGE_BAD_NAME = u'Solo letras, espacios y guiones (-)'

# Registramos los valores por defecto que tendra el formulario, cuando el campo sea un select le asignamos un diccionario como valor

default = dict()
default[FIELD_NAME] = 'Nombre de Prueba'
default[FIELD_LASTNAME] = 'Apellido de prueba'
default[FIELD_EMAIL] = 'correo@demo.com'
default[FIELD_PASSWORD] = 'probando123'
default[FIELD_CONFIRM] = 'probando123'
default[FIELD_DOCUMENT] = {'DNI':'54264895','RUC':'254152458963','Pasaporte':'4587DA45','Carné de Extranjería':'584E4E5D5'}

# Declaramos los errores

# item : campo a ser testeado

# message : el mensaje de error que deberia mostrar

# value : el valor erroneo a ser ingresado

txtNameBadSpell = {'item': FIELD_NAME, 'message': MESSAGE_BAD_NAME, 'value': u'FULAN0000'}
txtNameMinCharacters = {'item': FIELD_NAME, 'message': MESSAGE_MIN % 2, 'value': 'C'}
txtNameRequired = {'item': FIELD_NAME, 'message': MESSAGE_REQUIRED, 'value': ''}

txtLastNameBadSpell = {'item': FIELD_LASTNAME, 'message': MESSAGE_BAD_NAME, 'value': u'PEP3\$\$\$\$'}
txtLastNameMinCharacters = {'item': FIELD_LASTNAME, 'message': MESSAGE_MIN % 2, 'value': 'C'}
txtLastNameRequired = {'item': FIELD_LASTNAME, 'message': MESSAGE_REQUIRED, 'value': ''}

txtEmailBadSpell = {'item': FIELD_EMAIL, 'message': u'Ingrese un email válido.', 'value': u'demo.pe'}
txtEmailRequired = {'item': FIELD_EMAIL, 'message': MESSAGE_REQUIRED, 'value': u''}

txtDocumentDniMin = {'item': FIELD_DOCUMENT, 'message': u'El DNI debe ser de 8 dígitos', 'value':{'DNI': '21587'} }
txtDocumentRucMin = {'item': FIELD_DOCUMENT, 'message': u'El RUC debe ser de 11 dígitos', 'value': {'RUC': '12857'} }

# Registramos los errores

register = CreateForm(default)
register.addError(**txtNameBadSpell)
register.addError(**txtNameMinCharacters)
register.addError(**txtNameRequired)
register.addError(**txtLastNameBadSpell)
register.addError(**txtLastNameMinCharacters)
register.addError(**txtLastNameRequired)
register.addError(**txtEmailBadSpell)
register.addError(**txtEmailRequired)
register.addError(**txtDocumentDniMin)
register.addError(**txtDocumentRucMin)
[/sourcecode]

Ahora que tenemos toda la estructura de las pruebas procedemos a modificar el archivo **test_case.py** para acoplarlo a lo que hemos realizado. Es necesario resaltar que la intención de estos pasos es mostrar el modelo de trabajo con selenium y python. Los datos ingresados en estos archivos están basados en la prueba funcional que yo he realizado.

El archivo obtenido por Selenium será editado manualmente. Se insertará un for el cual recorrerá la lista de los errores agregados a este.

[sourcecode language="python"]
for data in register.getList():
print u'--> Probando la prueba: %s ' % data['cod']
driver.find_element_by_id(FIELD_NAME).clear()
driver.find_element_by_id(FIELD_NAME).send_keys(data[FIELD_NAME])
self.printText( 'nombre ingresado')
[/sourcecode]

Al finalizar el for se agregará el **assert **el cual tiene como función comprobar que el error mostrado es el indicado.

[sourcecode language="python"]
if data['is_error']:
driver.find_element_by_id(SUBMIT_REGISTER).click()
error_id = driver.find_element_by_id(data['error']['location']).get_attribute('data-parsley-id')
message = driver.find_element_by_css_selector('#parsley-id-%s > li' % error_id).text
assert data['error']['message'] == message, u'Mensaje erroneo en la prueba: %s , %s == %s' % (data['cod'], data['error']['message'], message)
print u'--> Exito en %s el campo %s dio como mensaje %s al ingresar %s' % (data['cod'], data['error']['location'], data['error']['message'], data['error']['value'])
[/sourcecode]

Finalmente, nuestro archivo **test_case.py** deberia quedar algo asi.

[sourcecode language="python"]

# -_- coding: utf-8 -_-

from form_input_data import register
from selenium import webdriver
from form_keys import \*
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException, NoAlertPresentException
import unittest

class PruebasDeRegistro(unittest.TestCase):
def setUp(self):
self.driver = webdriver.Firefox()
self.base_url = "http://paginadeprueba.pe/registro"
self.verificationErrors = []
self.accept_next_alert = False
self.debug = False

    def printText(self, text):
        if self.debug:
            print text

    def test_pruebas_de_registro(self):
        driver = self.driver
        driver.get(self.base_url + "/")

        for data in register.getList():
            print u'--> Probando la prueba: %s ' % data['cod']
            driver.find_element_by_id(FIELD_NAME).clear()
            driver.find_element_by_id(FIELD_NAME).send_keys(data[FIELD_NAME])
            self.printText( 'nombre ingresado')

            driver.find_element_by_id(FIELD_LASTNAME).clear()
            driver.find_element_by_id(FIELD_LASTNAME).send_keys(data[FIELD_LASTNAME])
            self.printText('apellido ingresado')

            driver.find_element_by_css_selector(FIELD_EMAIL).clear()
            driver.find_element_by_css_selector(FIELD_EMAIL).send_keys(data[FIELD_EMAIL])
            self.printText( 'correo ingresado' )

            driver.find_element_by_id(FIELD_PASSWORD).clear()
            driver.find_element_by_id(FIELD_PASSWORD).send_keys(data[FIELD_PASSWORD])
            self.printText( 'contraseña ingresado')

            driver.find_element_by_id(FIELD_CONFIRM).clear()
            driver.find_element_by_id(FIELD_CONFIRM).send_keys(data[FIELD_CONFIRM])
            self.printText( 'contraseña repetida ingresado')

            Select(driver.find_element_by_id(SELECT_DOCUMENT)).select_by_visible_text(data[FIELD_DOCUMENT].keys()[0])
            driver.find_element_by_id(FIELD_DOCUMENT).clear()
            driver.find_element_by_id(FIELD_DOCUMENT).send_keys(data[FIELD_DOCUMENT][data[FIELD_DOCUMENT].keys()[0]])
            self.printText( 'documento ingresado')

            if data['is_error']:
                driver.find_element_by_id(SUBMIT_REGISTER).click()
                error_id = driver.find_element_by_id(data['error']['location']).get_attribute('data-parsley-id')
                message = driver.find_element_by_css_selector('#parsley-id-%s > li' % error_id).text
                assert data['error']['message'] == message, u'Mensaje erroneo en la prueba: %s , %s == %s' % (data['cod'], data['error']['message'], message)
                print u'--> Exito en %s el campo %s dio como mensaje %s al ingresar %s' % (data['cod'], data['error']['location'], data['error']['message'], data['error']['value'])

    def is_element_present(self, how, what):
        try: self.driver.find_element(by=how, value=what)
        except NoSuchElementException, e: return False
        return True

    def is_alert_present(self):
        try: self.driver.switch_to_alert()
        except NoAlertPresentException, e: return False
        return True

    def close_alert_and_get_its_text(self):
        try:
            alert = self.driver.switch_to_alert()
            alert_text = alert.text
            if self.accept_next_alert:
                alert.accept()
            else:
                alert.dismiss()
            return alert_text
        finally: self.accept_next_alert = True

    def tearDown(self):
        self.driver.quit()
        self.assertEqual([], self.verificationErrors)

if **name** == "**main**":
unittest.main()
[/sourcecode]

El esquema explicado aquí sirve mas que nada para probar si el formulario muestra el mensaje de error correspondiente al valor ingresado. Sin embargo, Selenium sirve para validar diversos flujos que tiene un sistema web.

Para mayor información pueden visitar la [documentación de Selenium](http://selenium-python.readthedocs.org/).
