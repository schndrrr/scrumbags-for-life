import React from "react";
import {List, Card} from 'antd';
import "./card_list.css";

type Props = {
    data: {title:string}[]
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
                    <Card title={item.title}>Card content</Card>
                </List.Item>
            )}
        />

    )
}


export default CardList;