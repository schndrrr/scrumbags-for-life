const axios = require("axios");
const qs = require("qs");
const songController = require("../controllers/song.controller");
const artistController = require("../controllers/artist.controller");
const albumController = require("../controllers/album.controller");

module.exports = (str, token, response, type) => {

    axios("https://api.spotify.com/v1/search?type=" + type.join(",") + "&include_external=audio&q=" + str, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token
      }
    }).then((res) => {
        let ret = [];
        type.forEach(ty => {
            if (ty == "track") {
                res.data.tracks.items.forEach(track => {
                    let t = {
                        songID: track.id,
                        name: track.name,
                        artist: track.artists.map(m => m.name).join(", "),
                        genre: "GENERE TEST",
                        duration: track.duration_ms,
                        price: track.duration_ms / 100,
                        image: "https://picsum.photos/200/300",
                        type: "song"
                    }
                    ret.push(t);
                    songController.upsert(t, {songID: track.id})
                })
            } else if (ty == "artist") {
                res.data.artists.items.forEach(artist => {
                    let t = {
                        artistID: artist.id,
                        name: artist.name,
                        genre: "GENERE TEST",
                        followers: 200,
                        popularity: artist.popularity,
                        image: "https://picsum.photos/200/300",
                        type: "artist"
                    }
                    ret.push(t);
                    artistController.upsert(t, {artistID: artist.id})

                })
            } else if (ty == "album") {
                res.data.albums.items.forEach(album => {
                    let t = {
                        albumID: album.id,
                        name: album.name,
                        artist: album.artists.map(m => m.name).join(", "),
                        genre: "GENERE TEST",
                        songs: album.total_tracks,
                        duration: "album.duration_ms",
                        price: album.total_tracks,
                        image: "https://picsum.photos/200/300",
                        type: "album"
                    }
                    ret.push(t);
                    albumController.upsert(t, {albumID: album.id})
                })
            }
        });
        response.send(ret);
      }).catch(e => console.log(e));
}

