# Backend Tool für Projektportfoliomanagement

Prerequisites development environment:

    * [Java Development Kit - 11]
    * [Visual Studio Code - newest]
    * [Git - 2.34.1.windows.1](https://git-scm.com/)
    * [Apache Maven - 3.8.4](https://maven.apache.org/)
    * [Docker Desktop - 4.6.1](https://www.docker.com/products/docker-desktop)
    * [node.js - 14.15.0](https://nodejs.org/en/)

## Running the application in dev mode

docker run --name backend-mariadb -p 3307:3306 -e MYSQL_ROOT_PASSWORD=vs4tw -e MYSQL_USER=dbuser -e MYSQL_PASSWORD=dbuser -e MYSQL_DATABASE=ppm -d mariadb:10.6.2

./mvnw compile quarkus:dev

> **_NOTE:_** Quarkus now ships with a Dev UI, which is available in dev mode only at <http://localhost:8080/q/dev/>.

## ToDo: Running the application in production mode

.\mvnw clean package
docker-compose up --build

## Opening Database via Bash

mysql -u "$dbuser" -p"$dbuser" ppm

Password: vs4tw

## Opening the Endpoint-Documentation in the browser

<http://localhost:8080/q/swagger-ui/#/>
