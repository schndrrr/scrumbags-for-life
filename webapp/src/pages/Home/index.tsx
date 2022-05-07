import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import './home.css';
import {Divider} from "antd";
import CardList from "../../components/CardList";

//some dummy data
const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 5',
    },
    {
        title: 'Title 6',
    },
    {
        title: 'Title 7',
    },
    {
        title: 'Title 8',
    },
    {
        title: 'Title 9',
    },
    {
        title: 'Title 10',
    },
    {
        title: 'Title 11',
    },
    {
        title: 'Title 12',
    },
];

const Home = () => {

    return (
        <section className={'content'}>
            <Header searchActive={true}/>
            <Banner />
            <div className={'home-container flex-col'}>
                <Divider orientation={'left'} className={'data-field-label'}>Jazz</Divider>
                <CardList data={data}/>
                <Divider orientation={'left'} className={'data-field-label'}>HipHop</Divider>
                <CardList data={data}/>
            </div>

            <Footer />
        </section>
    )
}

export default Home;