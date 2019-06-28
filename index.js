const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = process.env.NODE_ENV || 3000;
app.use(express.json());

// const { sequelize } = require("./models");
const wildersTable = require("./models/wilder");
const matchesTable = require("./models/matche");
const teamTable = require("./models/team");
const sequelize = require("./config/connect");

sequelize.sync();
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

const { Wilders } = sequelize.models;

app.get("/wilders", async (req, res) => {
  await axios
    .get(
      "https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/wilders"
    )
    .then(response => {
      console.log(response.data);
      response.data.forEach(wilder =>
        wildersTable.create(wilder).catch(err => console.log(err))
      );
      // res.json(response.data);
    });
  res.json(await wildersTable.findAll());
});

app.get("/matches", async (req, res) => {
  await axios
    .get(
      "https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/matches"
    )
    .then(response => {
      console.log(response.data);
      response.data.forEach(matche =>
        matchesTable.create(matche).catch(err => console.log(err))
      );
      // res.json(response.data);
    });
  res.json(await matchesTable.findAll());
});

app.get("/team", async (req, res) => {
  await axios
    .get(
      "https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/campuses"
    )
    .then(response => {
      console.log(response.data);
      response.data.forEach(team =>
        teamTable.create(team).catch(err => console.log(err))
      );
      // res.json(response.data);
    });
  res.json(await teamTable.findAll());
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
