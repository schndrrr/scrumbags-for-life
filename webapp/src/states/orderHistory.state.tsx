import create from 'zustand';

type State = {
    orderHistory: any,
    setOrderHistory: (data:any) => void,
};

export const useFavorites = create<State>(set =>({
    //initial state
    orderHistory: [],
    //setSate function
    setOrderHistory: (data) => set(state => ({orderHistory: data} )),
}));