// module.exports = {
//     HOST: "localhost",
//     USER: "cisum",
//     PASSWORD: "1234",
//     DB: "cisumdb",
//     dialect: "mysql",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   };

//for heroku
module.exports = {
    HOST: "eu-cdbr-west-02.cleardb.net",
    USER: "b96f95aef976ed",
    PASSWORD: "860d3970",
    DB: "heroku_e7d3d1c1b69c0e8",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

//mysql://b96f95aef976ed:860d3970@eu-cdbr-west-02.cleardb.net/heroku_e7d3d1c1b69c0e8?