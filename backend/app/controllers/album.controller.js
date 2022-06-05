const db = require("../models");
const Album = db.albums;
const Op = db.Sequelize.Op;
// Create and Save a new Album
exports.create = (req) => {
  Album.create(req).then((data) => {
    console.log(data);
  }).catch(error => console.log(error));
};
// Retrieve all Albums from the database.
exports.findAll = (req, res) => {
    console.log("get all Albums");
    Album.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((e) => res.send(e));
};
// Find a single Album with an id
exports.findOne = (condition, res) => {
  Album.findOne({ where: condition }).then((data) => {
    res.send(data);
  }).catch(error => { console.log(error)});
};
// Update an Album by the id in the request
exports.update = (req, res) => {
  
};
// Delete an Album with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Albums from the database.
exports.deleteAll = (req, res) => {
  
};

exports.findAllPublished = (req, res) => {
  
};

exports.upsert = (values, condition) => {
  return Album
      .findOne({ where: condition })
      .then((obj) => {
          // update
          if(obj)
              return obj.update(values);
          // insert
          return Album.create(values);
      }).catch(error => {
        console.log(error);
      })
}