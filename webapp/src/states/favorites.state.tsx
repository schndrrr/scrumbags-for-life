import create from 'zustand';

type State = {
    favorites: any,
    setAddFavorites: (data:any) => void,
    setDeleteFavorite: (data:any) => void,
};

export const useFavorites = create<State>(set =>({
    //initial state
   favorites: [],
   //setSate function
    setAddFavorites: (data) => set(state => ({favorites: [...state.favorites, data]} )),
    setDeleteFavorite: (data) => set(state => ({favorites: data})),
}));