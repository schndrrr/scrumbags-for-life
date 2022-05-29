
const express = require("express");
const cors = require("cors");
const axios = require('axios').default;
const userController = require("./app/controllers/user.controller");
const songController = require("./app/controllers/song.controller");
const albumController = require("./app/controllers/album.controller");
const artistController = require("./app/controllers/artist.controller");
const boughtController = require("./app/controllers/bought.controller");
const favoriteController = require("./app/controllers/favorite.controller");
const refreshToken = require("./app/helpers/refreshToken");
const search = require("./app/helpers/search");
const app = express();
var corsOptions = {
    origin: "http://localhost:3000",
};


let tokenObject = {
    access_token: 'BQAhOckrXD68piSOp-PMCqITMfvvQgpD2ApwXTD9bQylO366oTI17Qc5RXMnf5gC6zPWUhJVzUHe4u6mz5w',
    expires_at: new Date('01.01.2000')
}

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route

const db = require("./app/models");
const checkToken = require("./app/helpers/checkToken");
db.sequelize.sync();

// maybe like this

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });


// returns all users
app.get("/users", (req, res) => {
    userController.findAll(req, res);
});

// creates new user
app.post("/user", (req, res) => {
    userController.create(req, res);
});

// deletes user 
app.delete("/user/:id", (req, res) => {
    let id = req.params.id;
    userController.delete(id, res);
})


// updates user with :id
app.post("/user/update/:id", (req, res) => {
    let id = req.params.id;
    userController.update(req, res, id);
})

// returns user for id
app.get("/user/:id", (req, res) => {
    let id = req.params.id;
    if (!id) {
        res.send({message: "no id given"});
    }
    userController.findOne({id: id}, res);
});


// returns albums, tracks, and artists for search string :q
app.get("/search/:q", async (req, res) => {
    let q = req.params.q;
    let type = [];
    if (req.query.type) {
        type = req.query.type.split(",");
    } else {
        type = ["album", "track", "artist"];
    }

    if(!checkToken(tokenObject)) {
        tokenObject = await refreshToken();
    }
    search(q, tokenObject.access_token, res, type);
});

// app.get("/songs", (req, res) => {
//     songController.findAll(req, res);
// });

// app.get("/albums", (req, res) => {
//     albumController.findAll(req, res);
// });

// app.get("/artists", (req, res) => {
//     artistController.findAll(req, res);
// });u


// authenticate user 
app.post("/authenticate/",(req, res) => {
  userController.auth(req,res);
});


// creates new favorite 
app.post("/favorite/:id", (req, res) => {
    let id = req.params.id;
    let item = {
        songID: req.body.favorite,
        userID: id
    }
    favoriteController.create(item);
});


// returns list of songs which the user set as favorite
app.get("/favorite/:id", async (req, res) => {
    let id = req.params.id;
    favoriteController.findAll({userID: id}, res).then(favorites => {
        let songs = [];
        let promise = favorites.map(fav => {
            return songController.findAll({songID: fav.songID})
        });
        Promise.all(promise).then(prom => {
            prom.forEach(song => {
                songs.push(song[0]);
            })
            res.send(songs.filter(f => f));
        })
    })
})

app.delete("/favorite/:id", (req, res) => {
    let id = req.params.id;
    favoriteController.delete({userID: id, songID: req.body.songID }, res);
})



// creates list of songs that user bought
app.post("/buy/:id", (req, res) => {
    let id = req.params.id;
    req.body.buyIDs.forEach((song) => {
        let item = {
            songID: song,
            userID: id
        }
        boughtController.create(item);
    })
});


// returns list of songs which the user bought
app.get("/bought/:id", async (req, res) => {
    let id = req.params.id;
    boughtController.findAll({userID: id}, res).then(bought => {
        let songs = [];
        if (bought) {
            console.log(bought);
            let promise = bought.map(fav => {
                return songController.findAll({songID: fav.songID})
            });
            Promise.all(promise).then(prom => {
                prom.forEach(song => {
                    songs.push(song[0]);
                })
                res.send(songs);
            })
        } else {
            res.send(songs);
        }

    })
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});