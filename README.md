# Construção de Software - T1

## Installation

This application requires [Node.js](https://nodejs.org/) to run.

Then, install the dependencies and start the server by typing the lines bellow:

```
npm install --global yarn
yarn install
```

## Running Keycloak with Docker

Open your favorite terminal and type these commands:

```
docker pull jboss/keycloak
docker run -p 8080:8080 --name keycloak-t1 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin jboss/keycloak
```

Keycloak is going to run on port http://localhost:8080

Then, follow the steps provided by this video until 02:55 minutes.
https://www.youtube.com/watch?v=nkvBy4wefbs

## Development

Duplicate the .env.example file and rename it to .env, then 