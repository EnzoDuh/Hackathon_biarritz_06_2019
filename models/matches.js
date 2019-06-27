"use strict";
module.exports = (sequelize, DataTypes) => {
  const Matches = sequelize.define(
    "Matches",
    {
      hometeam: DataTypes.STRING,
      awayteam: DataTypes.STRING,
      isodate: DataTypes.DATEONLY,
      winneruid: DataTypes.STRING
    },
    {}
  );
  Matches.associate = function(models) {
    // associations can be defined here
  };
  return Matches;
};
