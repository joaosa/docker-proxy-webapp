# docker-proxy-webapp

## build and run (macOS)

* docker-machine create default
* docker-machine start default
* docker-compose up -d --build

## check the webapp

* eval $(docker-machine env default)
* HOST=$(echo $DOCKER_HOST | xargs basename | cut -f1 -d:)
* open http://$HOST:8080
