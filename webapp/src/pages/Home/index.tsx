import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './home.css';

const Home = () => {

    return (
        <section className={'content'}>
            <Header searchActive={true}/>
                <div className={'test'}> test</div>
            <Footer />
        </section>
    )
}

export default Home;