USER_ID=$(shell id -u)
USER_GROUP=$(shell id -g)
USER= $(USER_ID):$(USER_GROUP)

# Para generar un nuevo post
# make new_post name="demo"
new_post:
	docker-compose run --rm --user ${USER} hugocker hugo new posts/${name}.md

# Para iniciar en local con propio config
# make server_local
server_local: 
	docker-compose run --publish 1313:1313 --rm --user ${USER} hugocker hugo server -D --bind=0.0.0.0 --config=config.local.toml

# Para iniciar el server en local con posts públicos
# make server
server: 
	docker-compose run --publish 1313:1313 --rm --user ${USER} hugocker hugo server --bind=0.0.0.0 --config=config.local.toml

# Para generar los archivos estáticos con posts en draft
# make build_draft
build_draft:
	rm -fr public
	docker-compose run --rm --user ${USER} hugocker hugo -D -v --config=config.local.toml

# Para generar los archivos estáticos con posts públicos
# make build
build:
	rm -fr public
	docker-compose run --rm --user ${USER} hugocker hugo -v