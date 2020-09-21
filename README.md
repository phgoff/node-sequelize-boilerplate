# NODEJS SEQUELIZE BOILERPLATE

## Branches

- master - default branch without sequelize
- sequelize
  - database
  - models
  - migrations

## Running Locally

### Installing Node.js modules

    yarn install

## Usage

### Development

    yarn dev

OR

    docker-compose -f docker-compose.dev.yml up [-d]

### Production

    yarn build

    yarn start

OR

    docker-compose up [-d]
