const axios = require("axios");

let data = [];
// Make a request for campuses
axios
  .get(
    "https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/campuses"
  )
  .then(function(response) {
    // handle success
    data = response;
    console.log(data);
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .finally(function() {
    // always executed
  });
