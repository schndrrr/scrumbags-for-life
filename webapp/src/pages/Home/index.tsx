import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import './home.css';

const Home = () => {

    return (
        <section className={'content'}>
            <Header searchActive={true}/>
            <Banner />
                <div className={'test'}> test</div>
            
            <Footer />
<<<<<<< HEAD
            
        </>
=======
        </section>
>>>>>>> 7bdccba4ecc443b8ebe12515f829092d93cf007f
    )
}

export default Home;