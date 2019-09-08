WORKDIR = /app
USER_ID=$(shell id -u)
USER_GROUP=$(shell id -g)
USER= $(USER_ID):$(USER_GROUP)
DOCKER_IMAGE = node

# Para instalar dependencias
install:
	docker run -i --rm -u $(USERID):$(USERID) -v $(PWD):/app -w $(WORKDIR) $(DOCKER_IMAGE) yarn

# Para iniciar en servidor de desarrollo
# make server_local
develop: 
	docker run -i --rm -u $(USERID):$(USERID) -p 8000:8000 -v $(PWD):/app -w $(WORKDIR) $(DOCKER_IMAGE) yarn develop

# Para iniciar el server en local modo produccion
# make server
serve: 
	docker run -i --rm -u $(USERID):$(USERID) -p 9000:9000 -v $(PWD):/app -w $(WORKDIR) $(DOCKER_IMAGE) yarn serve

# Para generar los archivos estáticos con posts públicos
# make build
build:
	rm -fr public
	docker run -i --rm -u $(USERID):$(USERID) -v $(PWD):/app -w $(WORKDIR) $(DOCKER_IMAGE) yarn build
