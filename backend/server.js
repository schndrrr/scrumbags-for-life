const express = require("express");
const cors = require("cors");
const axios = require('axios').default;
const userController = require("./app/controllers/user.controller");
const songController = require("./app/controllers/song.controller");
const albumController = require("./app/controllers/album.controller");
const artistController = require("./app/controllers/artist.controller");
const refreshToken = require("./app/helpers/refreshToken");
const search = require("./app/helpers/search");
const app = express();
var corsOptions = {
  origin: "http://localhost:3000",
};


let tokenObject = {
  access_token: 'BQAhOckrXD68piSOp-PMCqITMfvvQgpD2ApwXTD9bQylO366oTI17Qc5RXMnf5gC6zPWUhJVzUHe4u6mz5w',
  expires_at: new Date('01.01.2000')
}

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route

const db = require("./app/models");
const checkToken = require("./app/helpers/checkToken");
db.sequelize.sync();

// maybe like this

// db.sequelize.sync({ force: false , alter : true }).then(() => {
//     console.log("Drop and re-sync db.");
// });


// returns all users
app.get("/users", (req, res) => {
  userController.findAll(req, res);
});

// creates new user
app.post("/user", (req, res) => {
  userController.create(req, res);
});

// returns user for id
app.get("/user", (req, res) => {
    let id;
    if (req.query.id) {
      id = req.query.id;
    } else {
      res.send({message: "no id given"});
    }
    userController.findOne(id, res);
});

app.get("/search/:q", async (req, res) => {
  let q = req.params.q;
  let type = [];
  if (req.query.type) {
    type = req.query.type.split(",");
  } else {
    type = ["album", "track", "artist"];
  }

  if(!checkToken(tokenObject)) {
    tokenObject = await refreshToken();  
  }
  search(q, tokenObject.access_token, res, type);
});

app.get("/songs", async (req, res) => {
  songController.findAll(req, res);
});

app.get("/albums", async (req, res) => {
  albumController.findAll(req, res);
});

app.get("/artists", async (req, res) => {
  artistController.findAll(req, res);
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
