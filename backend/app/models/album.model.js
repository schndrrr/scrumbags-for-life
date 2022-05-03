module.exports = (sequelize, Sequelize) => {
    const Album = sequelize.define("album", {
        albumID: {
            type: Sequelize.STRING
          },
        name: {
            type: Sequelize.STRING
          },
        artist: {
            type: Sequelize.STRING
          },
        songs: {
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
    return Album;
  };