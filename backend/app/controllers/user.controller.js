const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

const favoriteController = require("./favorite.controller");
const boughtController = require("./bought.controller");
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
exports.findOne = (condition, res) => {
  User.findOne({ where: condition }).then((data) => {
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
exports.delete = (id, res) => {
  User.destroy({where: {id: id}}).then((r) => {
    if (r > 0) {
      favoriteController.deleteAll({userID: id});
      boughtController.deleteAll({userID: id});
      res.send({status: 200, message: "success"})
    } else {
      res.send({status: 400, message: "nothing to delete"})
    }
  })
};
// Delete all User from the database.
exports.deleteAll = (req, res) => {};

exports.auth = (req, res) => {
  if (req.body.username && req.body.password) {
    User.findOne({where: {username: req.body.username, password: req.body.password}}).then((data) =>{
      if (data) {
        res.send({status: 200, user: data });
      } else {
        res.send({status: 400, message: "password or username wrong"});
      }
    })
  } else {
    res.send({status: 400, message: "make sure to put username and password in body"})
  }
};

exports.findAllPublished = (req, res) => {};

exports.upsert = (values, condition) => {
  return User
      .findOne({ where: condition })
      .then((obj) => {
          // update
          if(obj)
              return obj.update(values);
          // insert
          return User.create(values);
      })
}
