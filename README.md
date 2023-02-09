# Craft Beer API Backend

This api is built with mongodb. To deploy it locally you need a mongodb account.

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
