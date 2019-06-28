const sequelize = require("../config/connect");
const Sequelize = require("sequelize");

module.exports = wilder = sequelize.define("wilder", {
  // attributes
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  campus: Sequelize.STRING
});
