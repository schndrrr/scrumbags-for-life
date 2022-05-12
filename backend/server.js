const express = require("express");
const cors = require("cors");
const axios = require('axios').default;
const userController = require("./app/controllers/user.controller");
const refreshToken = require("./app/helpers/refreshToken");
const search = require("./app/helpers/search");
const app = express();
var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route

const db = require("./app/models");
db.sequelize.sync();

// maybe like this

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });


// returns all users
app.get("/users", (req, res) => {
  userController.findAll(req, res);
});

// creates new user
app.post("/users", (req, res) => {
  userController.create(req, res);
});

// returns user for id
app.get("/user/:id", (req, res) => {
    var id = req.params.id;
    console.log(id);
});

app.get("/search/:q", (req, res) => {
  var q = req.params.q;

  refreshToken();
  search(q, "BQBRMt_CA1PGz6aFkTvs-66mS7THzMb12b0zVz-9QHdUuVVyx6CC88lRPAYHyZqK1JxgX3gMjIwZnRCUifo", res);
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});