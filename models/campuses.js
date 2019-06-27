"use strict";
module.exports = (sequelize, DataTypes) => {
  const Campuses = sequelize.define(
    "Campuses",
    {
      name: DataTypes.STRING,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
      uid: DataTypes.STRING,
      creation: DataTypes.DATEONLY,
      manager: DataTypes.JSON
    },
    {}
  );
  Campuses.associate = function(models) {
    // associations can be defined here
  };
  return Campuses;
};
