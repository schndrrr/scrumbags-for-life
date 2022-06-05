module.exports = (sequelize, Sequelize) => {
    const Favorite = sequelize.define("favorite", {
        songID: {
            type: Sequelize.STRING
        },
        userID: {
          type: Sequelize.STRING
        }
    });
    return Favorite;
  };