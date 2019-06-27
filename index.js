const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());
const port = process.env.NODE_ENV || 3000;

const { sequelize } = require("./models");
const { Wilders } = sequelize.models;

app.get("/wilders", (req, res) => {
  // Make a request for campuses
  // axios
  //   .get(
  //     "https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/wilders"
  //   )
  //   .then(function(response) {
  //     res.json(response.data);
  //   })
  //   .catch(function(error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .finally(function() {
  //     // always executed
  //   });

  axios
    .get(
      "https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/wilders"
    )
    .then(response => {
      // console.log(resonse.data);
      res.json(response.data);
    });
  // Wilders.findAll().then(wilders => res.json(wilders));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
