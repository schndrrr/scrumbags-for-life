const db = require("../models");
const Artist = db.artists;
const Op = db.Sequelize.Op;
// Create and Save a new Artist
exports.create = (req) => {
  Artist.create(req).then(() => {}).catch(error => console.log(error));
};
// Retrieve all Artists from the database.
exports.findAll = (req, res) => {
  console.log("get all Artists");
  Artist.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((e) => res.send(e));
};
// Find a single Artist with an id
exports.findOne = (req, res) => {};
// Update an Artist by the id in the request
exports.update = (req, res) => {};
// Delete an Artist with the specified id in the request
exports.delete = (req, res) => {};
// Delete all Artists from the database.
exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};
