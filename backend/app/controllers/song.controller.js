const db = require("../models");
const Song = db.songs;
const Op = db.Sequelize.Op;
// Create and Save a new Song
exports.create = (req) => {
  Song.create(req).then(() => {}).catch(error => console.log(error));
};
// Retrieve all Songs from the database.
exports.findAll = (req, res) => {
  console.log("get all songs");
  Song.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((e) => res.send(e));
};
// Find a single Song with an id
exports.findOne = (req) => {
  return Song.findOne({ where: { name: req } }).then((data) => {return data})
};
// Update a Song by the id in the request
exports.update = (req, res) => {};
// Delete a Song with the specified id in the request
exports.delete = (req, res) => {};
// Delete all Songs from the database.
exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};
