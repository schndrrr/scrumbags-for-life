import "./basket_list.css";
import * as React from "react";
import {List, Avatar} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import {useEffect, useState} from "react";
import {useBasket} from "../../states/basket.state";

let basketTemplate: {
    image: string;
    name: string;
    price: number;
    album: string;
    duration?: number;
    artist: string;
    songID: string;
}[] = [];


const BasketList = () => {
    const [dataBasket, setDataBasket] = useState(basketTemplate);
    const basket = useBasket(state => state.basket);
    const setDeleteBasket = useBasket(state => state.setDeleteBasket);

    //save basket data in state and watch for changes
    useEffect(() => {
        let tempStorageData = localStorage.getItem('basket') + '';
        basketTemplate = JSON.parse(tempStorageData);
        setDataBasket(basketTemplate);
    }, [dataBasket])

    let sum: string = '0';
    if (localStorage.getItem('basket')) {
        sum = dataBasket.reduce(function (prev: number, current: { price: number|string; }) {
            if (typeof current.price === "string"){
                let tempPrice = current.price + '';
                return prev + parseFloat(tempPrice)
            } else {
                return prev + current.price
            }


        }, 0).toFixed(2);
    }

    const deleteFromBasket = (e:any) => {
        const tempBasket = dataBasket;
        const track = dataBasket.find(item => item.songID === e.currentTarget.id)

        tempBasket.splice((dataBasket.findIndex(item => item === track)),1);
        localStorage.setItem('basket', JSON.stringify(tempBasket));
        setDataBasket(tempBasket);

        let tempData = basket.filter((f: string) =>
            f !== e.currentTarget.id);
        setDeleteBasket(tempData);
    }

    return (
        <div className={'basket-list'}>
            {localStorage.getItem('basket') &&
            <List
                itemLayout="horizontal"
                dataSource={dataBasket}
                // renders items based on backend data
                renderItem={(item)=> (
                    <List.Item >
                        <List.Item.Meta
                            avatar={<Avatar src={item.image}/>}
                            title={item.name}
                            description={item.artist + ' - ' + item.album}
                        />
                        <div>{item.price} €</div>
                        <DeleteOutlined style={{
                            color: '#F4951E',
                            fontSize: '16px',
                            paddingLeft: '8px'
                        }}
                        id = {item.songID}
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