import React from "react";
import {List, Card} from 'antd';
import "./card_list.css";
import Cards from "../Card/index";

//backend data for dynamic rendering
type Props = {
    data: {
        imgSrc: string;
        title: string;
        price: number;
        album: string;
        duration?: number;
        artist: string;
        id: string;
    }[]
}

const CardList = (props:Props) => {

    const{data} = props;

    return(
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 2,
                lg: 2,
                xl: 3,
                xxl: 4,
            }}
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    {/*<Card title={item.title}>Card content</Card>*/}
                    <Cards id={item.id} title={item.title} artist={item.artist} album={item.album} price={item.price} duration={item.price} imgSrc={item.imgSrc}/>
                </List.Item>
            )}
        />

    )
}


export default CardList;