const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
// Create and Save a new User
exports.create = (req, res) => {
    User.create(req).then(data => {
        console.log(data);
        res.send(data);
    })
};
// Retrieve all User from the database.
exports.findAll = (req, res) => {
  
};
// Find a single User with an id
exports.findOne = (req, res) => {
  
};
// Update a User by the id in the request
exports.update = (req, res) => {
  
};
// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all User from the database.
exports.deleteAll = (req, res) => {
  
};

exports.findAllPublished = (req, res) => {
  
};