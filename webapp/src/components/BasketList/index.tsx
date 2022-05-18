import "./basket_list.css";
import * as React from "react";
import {List, Avatar} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';

let basket = [{
    imgSrc: '',
    title: '',
    price: NaN,
    album: '',
    artist: '',
}];

const storageData = localStorage.getItem('basket') + '';
basket= [JSON.parse(storageData)];

const BasketList = () => {

    let sum = 0;
    if (localStorage.getItem('basket')) {
        sum = basket.reduce(function (prev: number, current: { price: string | number; }) {
            return prev + +current.price
        }, 0);
    }

    return (
        <div className={'basket-list'}>
            {localStorage.getItem('basket') &&
            <List
                itemLayout="horizontal"
                dataSource={basket}
                // renders items based on backend data
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={item.imgSrc}/>}
                            title={item.title}
                            description={item.artist + ' - ' + item.album}
                        />
                        <div>{item.price} €</div>
                        {/*remove item from basket*/}
                        <DeleteOutlined style={{
                            color: '#F4951E',
                            fontSize: '16px',
                            paddingLeft: '8px'
                        }}
                        />
                    </List.Item>
                )}
            />
            }
            {/*needs to be calculated automatically*/}
            <div className={'order-sum'}>
                {sum}  €
            </div>
        </div>


    )

}

export default BasketList;