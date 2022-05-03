import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BasketList from "../../components/BasketList";
import "./basket.css";


const Basket = () => {

    return (
        <section className={'content'}>
            <Header searchActive={false}/>
                <div className={'basket-container flex'}>
                    <BasketList/>
                    <div className={'DataTest flex'}/>
                </div>
            <Footer />
        </section>
    )
}

export default Basket;