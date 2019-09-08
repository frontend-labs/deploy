WORKDIR = /app
USER_ID=$(shell id -u)
USER_GROUP=$(shell id -g)
USER= $(USER_ID):$(USER_GROUP)
DOCKER_IMAGE = node

install: ## Para instalar dependencias: make install
	docker run -i --rm -u $(USER) -v $(PWD):/app -w $(WORKDIR) $(DOCKER_IMAGE) yarn

develop: ## Para iniciar en servidor de desarrollo: make develop
	docker run -i --rm -u $(USER) -p 8000:8000 -v $(PWD):/app -w $(WORKDIR) $(DOCKER_IMAGE) yarn develop

serve: ## Para iniciar el server en local modo produccion: make serve
	docker run -i --rm -u $(USER) -p 9000:9000 -v $(PWD):/app -w $(WORKDIR) $(DOCKER_IMAGE) yarn serve

build: ## Para generar los archivos estáticos con posts públicos: make build
	rm -rf public
	docker run -i --rm -u $(USER) -v $(PWD):/app -w $(WORKDIR) $(DOCKER_IMAGE) yarn build

new.post: ## Para crear un nuevo post: make new.post name=my-post-name
	docker run -i --rm -u $(USER) -v $(PWD):/app -w $(WORKDIR) $(DOCKER_IMAGE) yarn new:post -- ${name}

help:
	@printf "\033[31m%-22s %-59s %s\033[0m\n" "Target" " Help" "Usage"; \
	printf "\033[31m%-22s %-59s %s\033[0m\n"  "------" " ----" "-----"; \
	grep -hE '^\S+:.*## .*$$' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' | sort | awk 'BEGIN {FS = ":"}; {printf "\033[32m%-22s\033[0m %-58s \033[34m%s\033[0m\n", $$1, $$2, $$3}'
