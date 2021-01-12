FROM node:12.19.0-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

# Production
#RUN yarn install --frozen-lockfile --no-cache --production

COPY . .

EXPOSE 3000

CMD [ "yarn", "restart" ]
