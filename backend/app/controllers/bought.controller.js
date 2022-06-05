const db = require("../models");
const Bought = db.boughts;
const Op = db.Sequelize.Op;
// Create and Save a new bought songs
exports.create = (req) => {
  Bought.create(req).then((data) => {}).catch(error => console.log(error));
};
// Retrieve all bought songs from the database.
exports.findAll = (condition, res) => {
  return Bought.findAll({ where: condition }).then((data) => {
    return data;
  }).catch(error => { console.log(error)});
};
// Find a single bought song with an id
exports.findOne = (condition, res) => {
  Bought.findOne({ where: condition }).then((data) => {
    res.send(data);
  }).catch(error => { console.log(error)});
};
// Update an bought song by the id in the request
exports.update = (req, res) => {
  
};
// Delete a bought song with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all bought songs from the database.
exports.deleteAll = (condition) => {
  Bought.destroy({where: condition}).then(r => {
    console.log(r)
  }).catch(error => console.log(error));
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
