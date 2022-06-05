import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import './home.css';
import {Divider} from "antd";
import CardList from "../../components/CardList";
import {useSearchSong} from "../../states/songResponse.state";

const Home = () => {
    const data = useSearchSong(state => state.songResult);

    return (
        <section className={'content'}>
            <Header searchActive={true}/>
            <Banner />
            <div className={'home-container flex-col'}>
                {/*divider in CardList?*/}
                <Divider orientation={'left'} className={'data-field-label'}>Songs</Divider>
                <CardList data={data}/>
                {/*<Divider orientation={'left'} className={'data-field-label'}>Album</Divider>*/}
                {/*<CardList data={data}/>*/}
            </div>

            <Footer />
        </section>
    )
}

export default Home;