# docker-proxy-webapp

## build and run (macOS)

### single docker host

* docker-machine create default
* docker-compose up -d --build

### multi host

#### run the webapp

* docker-machine create webapp
* eval "$(docker-machine env webapp)"
* docker-compose up -d --build webapp-1

#### run the reverse proxy

* docker-machine create reverse-proxy
* eval "$(docker-machine env reverse-proxy)"
* docker-compose up -d --build reverse-proxy

## check the webapp

* open "http://$(docker-machine ip reverse-proxy):8080"
