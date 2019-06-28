const sequelize = require("../config/connect");
const Sequelize = require("sequelize");

module.exports = team = sequelize.define("team", {
  // attributes
  name: Sequelize.STRING,
  city: Sequelize.STRING,
  country: Sequelize.STRING,
  uid: Sequelize.STRING,
  manager: Sequelize.JSON
});
