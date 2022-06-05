module.exports = (sequelize, Sequelize) => {
  const Bought = sequelize.define("bought", {
      songID: {
          type: Sequelize.STRING
      },
      userID: {
        type: Sequelize.STRING
      }
  });
  return Bought;
};