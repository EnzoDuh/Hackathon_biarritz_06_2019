const Sequelize = require("sequelize");

// Option 1: Passing parameters separately
module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql"
    // operatorsAliases: false
  }
);
