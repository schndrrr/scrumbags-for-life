import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OrderHistory from "../../components/OrderHistory";
import { Tabs } from 'antd';
import UserDataForm from "../../components/UserDataForm";
import "./user.css";
import Favorites from "../../components/Favorites";

const { TabPane } = Tabs;

function callback(key:string) {
    console.log(key);
}

const User = () => {


    return (
            <section className={'content'}>
                <Header searchActive={false} loggedIn={true}/>
                <div className={'user-container flex'}>
                    <Tabs className={'flex full-width'} defaultActiveKey="1" onChange={callback}>
                        <TabPane className={'tabPane'} tab="Benutzerdaten" key="1">
                            <UserDataForm/>
                        </TabPane>
                        <TabPane className={'tabPane'} tab="Kaufhistorie" key="2">
                            <OrderHistory/>
                        </TabPane>
                        <TabPane className={'tabPane'} tab="Favoriten" key="3">
                            <Favorites/>
                        </TabPane>
                    </Tabs>

                </div>
                <Footer />
            </section>
    )
}

export default User;