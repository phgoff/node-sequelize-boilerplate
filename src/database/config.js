require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'mariadb',
    dialectOptions: {
      charset: 'utf8',
      timezone: 'Etc/GMT-7',
      useUTC: false,
      dateStrings: true,
      typeCast: true,
    },
    timezone: '+07:00',
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci',
      freezeTableName: true,
    },
    logging: false,
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'mariadb',
    dialectOptions: {
      charset: 'utf8',
      timezone: 'Etc/GMT-7',
      useUTC: false,
      dateStrings: true,
      typeCast: true,
    },
    timezone: '+07:00',
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci',
      freezeTableName: true,
    },
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'mariadb',
    dialectOptions: {
      charset: 'utf8',
      timezone: 'Etc/GMT-7',
      useUTC: false,
      dateStrings: true,
      typeCast: true,
    },
    timezone: '+07:00',
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci',
      freezeTableName: true,
    },
  },
};
