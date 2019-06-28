const sequelize = require("../config/connect");
const Sequelize = require("sequelize");

module.exports = matche = sequelize.define("matche", {
  // attributes
  homeTeam: Sequelize.STRING,
  awayTeam: Sequelize.STRING,
  isoDate: Sequelize.DATEONLY,
  winnerUid: Sequelize.STRING
});
