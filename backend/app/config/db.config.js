module.exports = {
    HOST: "localhost",
    USER: "cisum",
    PASSWORD: "1234",
    DB: "cisumdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };