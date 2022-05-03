const db = require("../models");
const Song = db.song;
const Op = db.Sequelize.Op;
// Create and Save a new Song
exports.create = (req, res) => {
    Song.create(req).then(data => {
        console.log(data);
        res.send(data);
    })
};
// Retrieve all Songs from the database.
exports.findAll = (req, res) => {
  
};
// Find a single Song with an id
exports.findOne = (req, res) => {
  
};
// Update a Song by the id in the request
exports.update = (req, res) => {
  
};
// Delete a Song with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Songs from the database.
exports.deleteAll = (req, res) => {
  
};

exports.findAllPublished = (req, res) => {
  
};