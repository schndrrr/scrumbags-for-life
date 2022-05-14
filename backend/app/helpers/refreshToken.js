const axios = require("axios");
const qs = require("qs");

module.exports = () => {
    const secret = Buffer.from("57854f70b95a4e0094fe12c558e27f23:e99998e3d236472690771e40130986ff").toString("base64");
    axios.post("https://accounts.spotify.com/api/token", qs.stringify({ "grant_type": "client_credentials" }), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Authorization': 'Basic ' + secret
      }
    }).then((res) => {
          console.log(res.data);
      }).catch(e => console.log(e));
}

