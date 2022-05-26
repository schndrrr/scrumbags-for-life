import axios from "axios";
import { Album } from "../classes/Album";
import { Artist } from "../classes/Artist";
import { Song } from "../classes/Song";

export const searchService = (searchString: string) => {
        return axios.get("https://cisum-musicstore.herokuapp.com/search/" + searchString + "?type=track").then(res => {
            let searchResponse = res.data.map((r: any) => {
                if (r.type == "album") {
                    let album: Album = r;
                    return album;
                } else if (r.type == "artist") {
                    let artist: Artist = r;
                    return artist;
                } else if (r.type == "song") {
                    let song: Song = r;
                    return song;
                }
            })
            return searchResponse;
        }).then(res => {
            console.log('Response from searchService: ');
            console.log(res);
            return res;
        })
}