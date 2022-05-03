const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
// Create and Save a new User
exports.create = (req, res) => {
  console.log("creating new user");
  User.create(req)
    .then((r) => {
      res.send(r);
    })
    .catch((e) => {
      res.send(e);
    });
};
// Retrieve all User from the database.
exports.findAll = (req, res) => {
  console.log("get all users");
  User.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((e) => res.send(e));
};
// Find a single User with an id
exports.findOne = (req, res) => {};
// Update a User by the id in the request
exports.update = (req, res) => {};
// Delete a User with the specified id in the request
exports.delete = (req, res) => {};
// Delete all User from the database.
exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};
