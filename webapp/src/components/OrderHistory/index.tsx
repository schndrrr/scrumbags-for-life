import {Avatar, List} from "antd";
import {DownloadOutlined} from "@ant-design/icons";
import * as React from "react";

//dummy data
const data = [
    {
        title: 'Feuermelder',
        description: 'Michael Wendler, Meuerfelder',
        price: 0.99,
        date: '25.01.2022',
    },
    {
        title: 'Deiner Mutter',
        description: 'Florian Hager, Mutterwitze',
        price: 0.99,
        date: '25.01.2022',
    },
    {
        title: 'I love snacks',
        description: 'Ilvi Löhr, Snacking',
        price: 0.99,
        date: '25.01.2022',
    },
    {
        title: 'Das sieht scheiße aus',
        description: 'Thomas Hartmann, Shitstorm',
        price: 0.99,
        date: '25.01.2022',
    },
];



const OrderHistory = () => {

    return (
        <div className={'basket-list'}>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <DownloadOutlined style={{
                            color:'#F4951E',
                            fontSize:'24px',
                            paddingRight: '15px'}}
                        />
                        <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<a href="../">{item.title}</a>}
                            description={item.description}
                        />
                        <div>{item.price} €</div>
                        <div style={{paddingLeft:'30px'}}>{item.date}</div>
                    </List.Item>
                )}
            />
        </div>


    )

}

export default OrderHistory;