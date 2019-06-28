const Sequelize = require("sequelize");
require("dotenv").config();

// Option 1: Passing parameters separately
module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: "mysql"
    // operatorsAliases: false
  }
);
