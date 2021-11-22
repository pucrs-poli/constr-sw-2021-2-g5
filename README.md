# Construção de Software - T2

## Installation

This application requires [Node.js](https://nodejs.org/) to run.

Then, install the dependencies and start the server by typing the lines bellow:

```
npm install --global yarn
yarn install
```

## Development

Duplicate the .env.example file and rename it to .env, then set the variables according to the list bellow:

- **DATABASE_USER** = constr-sw-2021-g5-t2
- **DATABASE_PASSWORD** = BRC0bmooiVbh3xDL

Now you're ready to type the following command and start to develop:

```
yarn start
```

Your server will be avaliable on http://localhost:3333.

## Running with Docker

```
docker build -t constr-sw-t2 .
docker run -p 3333:3333 --name constr-sw-t2 -e DATABASE_USER=constr-sw-2021-g5-t2 -e DATABASE_PASSWORD=BRC0bmooiVbh3xDL constr-sw-t2
```

## Endpoints

You can interact with the endpoints by accessing the Swagger documentation:

http://localhost:3333/api-docs/

## Schemas

### Disciplinas

```json
{
   "nome":string	        
   "validade"	     
   "objetivos"	  
   "ementa"	     
   "codigo"	     
   "creditos"	     
   "cargaHoraria"  
}
```

### Turmas

```json
{
  numero	        number
  ano	           number
  semestre	     number
  disciplina	  string
  horario	     string
}
```
