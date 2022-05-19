const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
// Create and Save a new User
exports.create = (req, res) => {
  console.log("creating new user");
  User.create(req.body)
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
exports.findOne = (req, res) => {
  User.findOne({ where: { id: req } }).then((data) => {
    res.send(data);
  })
};
// Update a User by the id in the request
exports.update = (req, res, id) => {
  console.log(req.body, id);
  User.update(req.body, { where: { id: id }}).then((data) => {
    console.log(data);
    if (data[0] == 0 ){
      res.send({status:400, message:'user not found'})
    } else {
      User.findOne({ where: { id: id } }).then((data) => {
        res.send(data);
      })
    }
  })



};
// Delete a User with the specified id in the request
exports.delete = (req, res) => {};
// Delete all User from the database.
exports.deleteAll = (req, res) => {};

exports.auth = (req, res) => {
  User.findOne({where: {username: req.body.username, password: req.body.password}}).then((data) =>{
    res.send(data);
  })
};

exports.findAllPublished = (req, res) => {};
