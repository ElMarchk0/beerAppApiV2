# Craft Beer API

The beers featured in the production version application are brewed in and produced in Victoria, Canada. This API handles both the selection of beer and the reviews.

### Building locally

This api is built with mongodb. To build and deploy it locally you need a mongodb account. This backend is not necessary to run the [frontend application](https://github.com/ElMarchk0/beerApiV2) locally.

#### Sample .env file

```
DATABASE_URL = mongodb+srv://<YOUR_ACCOUNT_INFO>.hl0jb.mongodb.net/<COLLECTION_NAME>?retryWrites=true&w=majority
PORT = 3001
```

#### Run Locally

Run development server with nodemon.

```
yarn
yarn dev
```

Build production server locally

```
yarn
yarn build
yarn start
```

Docker build

```
docker-compose build
docker-compose up -d
```
