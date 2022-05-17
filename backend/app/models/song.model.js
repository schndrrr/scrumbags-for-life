module.exports = (sequelize, Sequelize) => {
    const Song = sequelize.define("song", {
        songID: {
            type: Sequelize.STRING,
            primaryKey: true
          },
        name: {
            type: Sequelize.STRING
          },
        artist: {
            type: Sequelize.STRING
          },
        genre: {
            type: Sequelize.STRING
          },
        duration: {
            type: Sequelize.STRING
          },
        price: {
            type: Sequelize.STRING
          },
        image: {
            type: Sequelize.STRING
    }
    });
    return Song;
  };