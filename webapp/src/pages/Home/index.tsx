import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './home.css';

const Home = () => {

    return (
        <>
            <Header searchActive={true}/>
                <div className={'test'}> test</div>
            <Footer />
        </>
    )
}

export default Home;