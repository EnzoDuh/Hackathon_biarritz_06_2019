require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
    operatorsAliases: false
  },
  test: {
    username: "root",
    password: process.env.DB_PASS,
    database: "database_test",
    host: process.env.DB_HOST,
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    username: "root",
    password: process.env.DB_PASS,
    database: "database_production",
    host: process.env.DB_HOST,
    dialect: "mysql",
    operatorsAliases: false
  }
};
