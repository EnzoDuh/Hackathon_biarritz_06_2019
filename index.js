const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.NODE_ENV || 3000;
app.use(express.json());

// const { sequelize } = require("./models");
const wildersTable = require("./models/wilder");
const matchesTable = require("./models/matche");
const teamTable = require("./models/team");
const sequelize = require("./config/connect");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

const { Wilders } = sequelize.models;

app.get("/wilders", (req, res) => {
  axios
    .get(
      "https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/wilders"
    )
    .then(response => {
      console.log(response.data);
      wildersTable.create(response.data).catch(err => console.log(err));
      // res.json(response.data);
    });
});

app.get("/matches", (req, res) => {
  axios
    .get(
      "https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/matches"
    )
    .then(response => {
      console.log(response.data);
      matchesTable.create(response.data).catch(err => console.log(err));
      // res.json(response.data);
    });
});

app.get("/team", (req, res) => {
  axios
    .get(
      "https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/campuses"
    )
    .then(response => {
      console.log(response.data);
      teamTable.create(response.data).catch(err => console.log(err));
      // res.json(response.data);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
