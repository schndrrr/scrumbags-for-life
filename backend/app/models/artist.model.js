module.exports = (sequelize, Sequelize) => {
    const Artist = sequelize.define("artist", {
        artistID: {
            type: Sequelize.STRING
          },
        name: {
            type: Sequelize.STRING
          },
        genre: {
            type: Sequelize.STRING
          },
        followers: {
            type: Sequelize.STRING
          },
        popularity: {
            type: Sequelize.STRING
          },
        image: {
            type: Sequelize.STRING
    }
    });
    return Artist;
  };