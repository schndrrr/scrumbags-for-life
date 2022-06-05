import axios from "axios";
import { Album } from "../classes/Album";
import { Artist } from "../classes/Artist";
import { Song } from "../classes/Song";

export const searchService = (searchString: string) => {
        return axios.get("https://cisum-musicstore.herokuapp.com/search/" + replaceUmlaute(searchString) + "?type=track").then(res => {
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

const umlautMap = {
    '\u00dc': 'UE',
    '\u00c4': 'AE',
    '\u00d6': 'OE',
    '\u00fc': 'ue',
    '\u00e4': 'ae',
    '\u00f6': 'oe',
    '\u00df': 'ss',
  }
  
  const replaceUmlaute = (str: string) => {
    return str
      .replace(/[\u00dc|\u00c4|\u00d6][a-z]/g, (a: string) => {
        const big = umlautMap[a.slice(0, 1) as keyof typeof umlautMap];
        return big.charAt(0) + big.charAt(1).toLowerCase() + a.slice(1);
      })
      .replace(new RegExp('['+Object.keys(umlautMap).join('|')+']',"g"),
        (a: string) => umlautMap[a as keyof typeof umlautMap]
      );
  }