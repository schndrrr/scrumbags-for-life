const db = require("../models");
const Favorite = db.favorites;
const Op = db.Sequelize.Op;
// Create and Save a new Album
exports.create = (req) => {
  Favorite.create(req).then().catch(error => console.log(error));
};
// Retrieve all Albums from the database.
exports.findAll = (condition, res) => {
    return Favorite.findAll({ where: condition })
      .then((data) => {
        return data;
      })
      .catch((e) => res.send(e));
};
// Find a single Album with an id
exports.findOne = (condition, res) => {
  Favorite.findOne({ where: condition }).then((data) => {
    res.send(data);
  }).catch(error => { console.log(error)});
};
// Update an Album by the id in the request
exports.update = (req, res) => {
  
};
// Delete an Album with the specified id in the request
exports.delete = (condition, res) => {
  Favorite.destroy({where: condition}).then(r => {
    if (r > 0) {
      res.send({status: 200, message: "success"})
    } else {
      res.send({status: 400, message: "nothing to delete"})
    }
  })
};
// Delete all Albums from the database.
exports.deleteAll = (condition) => {
  Favorite.destroy({where: condition}).then(r => {
    console.log(r)
  }).catch(error => console.log(error));
};

exports.findAllPublished = (req, res) => {
  
};

exports.upsert = (values, condition) => {
  return Favorite
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