const db = require("../models");
const Artist = db.artist;
const Op = db.Sequelize.Op;
// Create and Save a new Artist
exports.create = (req, res) => {
    User.create(req).then(data => {
        console.log(data);
        res.send(data);
    })
};
// Retrieve all Artists from the database.
exports.findAll = (req, res) => {
  
};
// Find a single Artist with an id
exports.findOne = (req, res) => {
  
};
// Update an Artist by the id in the request
exports.update = (req, res) => {
  
};
// Delete an Artist with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Artists from the database.
exports.deleteAll = (req, res) => {
  
};

exports.findAllPublished = (req, res) => {
  
};