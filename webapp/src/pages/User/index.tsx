import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UserDataOverview from "../../components/UserDataOverview";
import PaymentPicker from "../../components/PaymentPicker";
import OrderHistory from "../../components/OrderHistory";

const User = () => {

    return (
            <section className={'content'}>
                <Header searchActive={false} loggedIn={true}/>
                <div className={'basket-container flex'}>
                    <OrderHistory/>
                    <div className={'flex-col flex-space-between'}>
                        <div className={'basket-sidebar flex-col'}>
                            <UserDataOverview/>
                            <PaymentPicker/>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
    )
}

export default User;