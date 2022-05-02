const express = require("express");
const cors = require("cors");
const userController = require("./app/controllers/user.controller")

const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
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

app.get("/", (req, res) => {
  userController.findAll(req, res);
});
app.post("/createUser", (req, res) => {
    console.log(req.body);
    userController.create(req, res)
//     res.json({ message: "Fickt euch alle",
// status: 200 });
  });
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});