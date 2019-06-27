"use strict";
module.exports = (sequelize, DataTypes) => {
  const Wilders = sequelize.define(
    "Wilders",
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      campus: DataTypes.STRING
    },
    {}
  );
  Wilders.associate = function(models) {
    // associations can be defined here
  };
  return Wilders;
};
