FROM node:16 as base

WORKDIR /home/node/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3001



