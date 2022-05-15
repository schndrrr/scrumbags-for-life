import React from "react";
import {List, Card} from 'antd';
import "./card_list.css";
import Cards from "../Card/index";

type Props = {
    data: {
        imgSrc: string;
        title: string;
        price: number;
        album: string;
        duration?: number;
        artist: string;
    }[]
}

const CardList = (props:Props) => {

    const{data} = props;

    return(
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 1,
                md: 2,
                lg: 3,
                xl: 3,
                xxl: 4,
            }}
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    {/*<Card title={item.title}>Card content</Card>*/}
                    <Cards title={item.title} description={item.artist + ' - ' + item.album} price={item.price} duration={item.price} imgSrc={item.imgSrc}/>
                </List.Item>
            )}
        />

    )
}


export default CardList;