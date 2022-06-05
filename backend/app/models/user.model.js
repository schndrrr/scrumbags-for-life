module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        firstname: {
            type: Sequelize.STRING
          },
        lastname: {
            type: Sequelize.STRING
          },
        gender: {
            type: Sequelize.STRING
          },
        role: {
            type: Sequelize.STRING
          },
        email: {
            type: Sequelize.STRING
          },
        postalCode: {
            type: Sequelize.STRING
          },
        street: {
            type: Sequelize.STRING
          },
        streetNr: {
            type: Sequelize.STRING
          },
        city: {
            type: Sequelize.STRING
          },
        username: {
            type: Sequelize.STRING
          },
        password: {
            type: Sequelize.STRING
        },
    });
    return User;
  };