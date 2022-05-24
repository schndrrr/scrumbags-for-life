import React from "react";
import {List, Card} from 'antd';
import "./card_list.css";
import Cards from "../Card/index";
import {Song} from '../../classes/Song';

//backend data for dynamic rendering
type Props = {
    data: Song[]
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
                    <Cards songID={item.songID} name={item.name} artist={item.artist} album={item.album} price={item.price} image={item.image}/>
                </List.Item>
            )}
        />

    )
}


export default CardList;