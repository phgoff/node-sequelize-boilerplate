FROM node:12.18.0-alpine

RUN apk add yarn

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

# Production
# RUN yarn install --frozen-lockfile --no-cache --production

COPY . .

EXPOSE 5000