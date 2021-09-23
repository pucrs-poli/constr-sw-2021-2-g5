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

Keycloak is going to run on port http://localhost:8080. Access this URL, click on Administration Console and then type your credentials using admin for both fields.

Then, follow the steps provided by this video until 02:55 minutes.
https://www.youtube.com/watch?v=nkvBy4wefbs

**OBS:** instead of set the client roles to realm-management, select master-realm.

## Development

Duplicate the .env.example file and rename it to .env, then set the variables according to the list bellow:

- **BASE_KEYCLOAK_URL** = http://localhost:8080/auth
- **REALM_NAME = master**
- **PORT** = any port number you want

Now you're ready to type the following command and start to develop:

```
yarn start
```

Your server will be avaliable according to the PORT you setted.