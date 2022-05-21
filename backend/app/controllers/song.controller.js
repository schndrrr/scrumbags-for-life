const db = require("../models");
const Song = db.songs;
const Op = db.Sequelize.Op;
// Create and Save a new Song
exports.create = (req) => {
  Song.create(req).then(() => {}).catch(error => console.log(error));
};
// Retrieve all Songs from the database.
exports.findAll = (condition, res) => {
  return Song.findAll({where: condition})
};
// Find a single Song with an id
exports.findOne = (condition, res) => {
  return Song.findOne({ where: condition }).then((data) => {
    res.send(data);
  });
};
// Update a Song by the id in the request
exports.update = (req, res) => {};
// Delete a Song with the specified id in the request
exports.delete = (req, res) => {};
// Delete all Songs from the database.
exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};

exports.upsert = (values, condition) => {
  return Song
      .findOne({ where: condition })
      .then((obj) => {
          // update
          if(obj)
              return obj.update(values);
          // insert
          return Song.create(values);
      })
}
