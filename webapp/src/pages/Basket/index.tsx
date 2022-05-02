import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BasketList from "../../components/BasketList";


const Basket = () => {

    return (
        <>
            <Header searchActive={false}/>
                <BasketList/>
            <Footer />
        </>
    )
}

export default Basket;