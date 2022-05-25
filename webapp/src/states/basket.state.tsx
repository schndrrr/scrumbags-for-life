import create from 'zustand';

type State = {
    basket: any,
    setBasket: (data:any) => void,
    setDeleteBasket: (data:any) => void,
};

export const useBasket = create<State>(set =>({
    //initial state
    basket: [],
    //setState function
    setBasket: (data) => set(state => ({basket: [...state.basket.concat(data)]} )),
    setDeleteBasket: (data) => set(state => ({basket: data}))
}));