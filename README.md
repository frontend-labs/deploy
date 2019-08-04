# Deploy FrontEndlabs

En este repositorio se encuentra el código fuente y el sistema que genera el sitio **beta**
de frontendlabs! :fire:

## Herramientas

- Docker (17.x ó versión mas reciente)

- Git (2.x ó versión mas reciente)

- Docker compose (1.6.x ó versión mas reciente)

## Flujo de trabajo

Es necesario ejecutar estos comandos dentro de la carpeta principal del repo, en este caso
al clonarlo toma el nombre por defecto **deploy.frontendlabs.io**, entonces debo aplicar el comando en terminal:

```
cd deploy.frontendlabs.io
```

o verificar que estoy en esa carpeta ejecutando el comando:

```
echo $PWD
```

### Acciones con docker-compose

Para crear un nuevo post realizo el siguiente comando:

```
docker-compose run --rm --user $(id -u):$(id -g) hugocker hugo new posts/my-post-demo.md
```

Para visualizar el sitio en local con posts en borrador:

```
docker-compose run --publish 1313:1313 --rm --user $(id -u):$(id -g) hugocker hugo server -D --bind=0.0.0.0
```

Para visualizar el sitio en local con posts públicos:

```
docker-compose run --publish 1313:1313 --rm --user ${USER} hugocker hugo server --bind=0.0.0.0
```

Para generar los archivos estáticos con posts en draft

```
rm -fr public
docker-compose run --rm --user $(id -u):$(id -g) hugocker hugo -D -v
```

Para generar los archivos estáticos con posts públicos

```
rm -fr public
docker-compose run --rm --user $(id -u):$(id -g) hugocker hugo -v
```


### Acciones con make

Las acciones en docker-compose se facilitan a través de make:

Para crear un nuevo post realizo el siguiente comando:

```
make new_post name="my-post-demo"
```

Para visualizar el sitio en local con posts en borrador:

```
make server_draft
```

Para visualizar el sitio en local con posts públicos:

```
maker server
```

Para generar los archivos estáticos con posts en draft

```
maker build_draft
```

Para generar los archivos estáticos con posts públicos

```
maker build
```