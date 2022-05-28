import create from 'zustand';

type State = {
    songResult: any,
    setSongResult: (data:any) => void,
};

export const useSearchSong = create<State>(set =>({
    //initial state
    songResult:
        [{
            image: "https://i.scdn.co/image/ab67616d0000b273d3acd0f2186daa8e4cb0f65b",
            name: 'Numb / Encore',
            price: 2.05,
            artist: "JAY-Z, Linkin Park",
            songID: "7dyluIqv7QYVTXXZiMWPHW"
        },    {
            image: "https://i.scdn.co/image/ab67616d0000b273b4ad7ebaf4575f120eb3f193",
            name: 'Breaking the Habit',
            price: 1.97,
            artist: "Linkin Park",
            songID:"6n8TMVyFKoUmDc4apxceRD"
        },    {
            image: "https://i.scdn.co/image/ab67616d0000b273e2f039481babe23658fc719a",
            name: 'One Step Closer',
            price: 1.57,
            artist: "Linkin Park",
            songID:"3K4HG9evC7dg3N0R9cYqk4"
        },    {
            image: "https://i.scdn.co/image/ab67616d0000b273e2f039481babe23658fc719a",
            name: 'A Place for My Head',
            price: 1.85,
            artist: "Linkin Park",
            songID:"5rAxhWcgFng3s570sGO2F8"
        }],

    //setSate function
    setSongResult: (data) => set(state => ({songResult: data} )),
}));