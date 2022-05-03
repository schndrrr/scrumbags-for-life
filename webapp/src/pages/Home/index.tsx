import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import './home.css';

const Home = () => {

    return (
        <>
            <Header searchActive={true}/>
            <Banner />
                <div className={'test'}> test</div>
            
            <Footer />
            
        </>
    )
}

export default Home;