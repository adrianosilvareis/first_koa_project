# koa-pets
### **CRUD** project with `koa` to register a pet list

## project's goal

This project aims to create a simple [CRUD](https://pt.wikipedia.org/wiki/CRUD) server using [koa](https://koajs.com/), with all the main structure ready for use.


## libs

1. [koa](https://koajs.com/)
2. [koa-bodyparser](https://github.com/koajs/bodyparser)
3. [koa-helmet](https://github.com/venables/koa-helmet)
4. [koa-router](https://github.com/ZijianHe/koa-router)

`package commands` | action | use description
--- | --- | ---
yarn test | run `jest` only once, with `NODE_ENV=test` | ideal for QA testing or hooks before committing
yarn test:dev | run `jest` in watch mode and `NODE_ENV=test` | ideal for monitoring tests during development
start | run application in `development` mode with `nodemon` | ideal for testing the application during development
server | run application in `production` mode with `nodemon` | ideal for production


## Routes

base url: http://localhost

default port: 3000

verb | route | params | url | expect
---|---|---|---|---
GET | /pets | null | http://localhost:3000/pets | ```["tobi", "loki", "jane"]```
POST | /pets | null | http://localhost:3000/pets | ```{ name:bobby, species:'chiuaua' }```
GET | /pets/:name | name | http://localhost:3000/pets/tobi | ```{ name: 'tobi', species: 'ferret' }```
DELETE | /pets/:name | name | http://localhost:3000/pets/tobi | remove and return tobi object

## Folder structure
```bash
__test__
app
  ├───controller
  ├───models
  └───router
```

for [CONTRIBUTING](CONTRIBUTING.md)

[LICENCE](LICENCE.md)

[![Adriano Reis](https://avatars2.githubusercontent.com/u/11447940?s=460&v=4, "WHO I AM")]((https://github.com/adrianosilvareis))
