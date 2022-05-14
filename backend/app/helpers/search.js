const axios = require("axios");
const qs = require("qs");

module.exports = (str, token, response) => {
    axios("https://api.spotify.com/v1/search?type=track&include_external=audio&q=" + str, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token
      }
    }).then((res) => {
          console.log(res.data);
          response.send(res.data);
      }).catch(e => console.log(e));
}

