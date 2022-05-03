import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const User = () => {

    return (
        <>
            <Header searchActive={false} loggedIn={true}/>

            <Footer />
        </>
    )
}

export default User;