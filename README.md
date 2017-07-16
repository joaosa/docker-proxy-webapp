# docker-proxy-webapp

## build and run (macOS)

* docker-machine start
* docker-compose up -d --build

## check the webapp

* eval $(docker-machine env)
* HOST=$(echo $DOCKER_HOST | xargs basename | cut -f1 -d:)
* open http://$HOST:8080
