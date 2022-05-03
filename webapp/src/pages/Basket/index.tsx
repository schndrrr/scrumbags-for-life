import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BasketList from "../../components/BasketList";
import "./basket.css";
import UserDataOverview from "../../components/UserDataOverview";
import PaymentPicker from "../../components/PaymentPicker";
import {Button} from "antd";
import {Link} from "react-router-dom";


const Basket = () => {

    return (
        <section className={'content'}>
            <Header searchActive={false}/>
                <div className={'basket-container flex'}>
                    <BasketList/>
                    <div className={'flex-col flex-space-between'}>
                        <div className={'basket-sidebar flex-col'}>
                            <UserDataOverview/>
                            <PaymentPicker/>
                        </div>
                        <Button type={'primary' } size={'large'}>
                            <Link to={'../order-overview'}>Bezahlvorgang abschließen</Link>
                        </Button>
                    </div>
                </div>
            <Footer />
        </section>
    )
}

export default Basket;