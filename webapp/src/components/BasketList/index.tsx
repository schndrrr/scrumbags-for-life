import "./basket_list.css";
import * as React from "react";
import {List, Avatar} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import {useEffect, useState} from "react";

let basketTemplate: {
    imgSrc: string;
    title: string;
    price: number;
    album: string;
    duration?: number;
    artist: string;
    id: string;
}[] = [];


const BasketList = () => {
    const [basket, setBasket] = useState(basketTemplate);

    //save basket data in state and watch for changes
    useEffect(() => {
        let tempStorageData = localStorage.getItem('basket') + '';
        basketTemplate = JSON.parse(tempStorageData);
        setBasket(basketTemplate);
    }, [basket])

    let sum: string = '0';
    if (localStorage.getItem('basket')) {
        sum = basket.reduce(function (prev: number, current: { price: number; }) {
            return prev + current.price
        }, 0).toFixed(2);
    }

    const deleteFromBasket = (e:any) => {
        const tempBasket = basket;
        const track = basket.find(item => item.id === e.currentTarget.id)

        tempBasket.splice((basket.findIndex(item => item === track)),1);
        localStorage.setItem('basket', JSON.stringify(tempBasket));
        setBasket(tempBasket);
    }

    return (
        <div className={'basket-list'}>
            {localStorage.getItem('basket') &&
            <List
                itemLayout="horizontal"
                dataSource={basket}
                // renders items based on backend data
                renderItem={(item)=> (
                    <List.Item >
                        <List.Item.Meta
                            avatar={<Avatar src={item.imgSrc}/>}
                            title={item.title}
                            description={item.artist + ' - ' + item.album}
                        />
                        <div>{item.price} €</div>
                        <DeleteOutlined style={{
                            color: '#F4951E',
                            fontSize: '16px',
                            paddingLeft: '8px'
                        }}
                        id = {item.id}
                        onClick={deleteFromBasket}
                        />
                    </List.Item>
                )}
            />
            }
            <div className={'order-sum'}>
                {sum}  €
            </div>
        </div>
    )
}

export default BasketList;