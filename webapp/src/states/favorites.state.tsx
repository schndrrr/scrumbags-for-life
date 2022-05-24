import create from 'zustand';

type State = {
    favorites: any,
    setFavorites: (data:any) => void,
};

export const useFavorites = create<State>(set =>({
    //initial state
   favorites: undefined,
   //setSate function
    setFavorites: (data) => set(state => ({favorites: state.favorites + data} )),
}));