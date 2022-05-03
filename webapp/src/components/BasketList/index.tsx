import "./basket_list.css";
import * as React from "react";
import {List, Avatar} from 'antd';

const data = [
    {
        title: 'Feuermelder',
        description: 'Michael Wendler, Meuerfelder'
    },
    {
        title: 'Deiner Mutter',
        description: 'Florian Hager, Mutterwitze'
    },
    {
        title: 'I love snacks',
        description: 'Ilvi Löhr, Snacking'
    },
    {
        title: 'Das sieht scheiße aus',
        description: 'Thomas Hartmann, Shitstorm'
    },
];

const BasketList = () => {

    return (
            <List
                className={'basket-list'}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<a href="../">{item.title}</a>}
                            description={item.description}
                        />
                        <div>0,99€</div>
                    </List.Item>
                )}
            />

    )

}

export default BasketList;