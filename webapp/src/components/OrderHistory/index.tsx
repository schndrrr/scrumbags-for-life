import {Avatar, List} from "antd";
import {DownloadOutlined} from "@ant-design/icons";
import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {Song} from "../../classes/Song";


const OrderHistory = () => {

    const user = JSON.parse(localStorage.getItem('user') + '');
    const [order, setOrder] = useState([]);

    //get orders from backend
    const getOrders = async () => {
        return await axios.get("http://localhost:8080/bought/" + user.id).then(
            (res) => {
                console.log('Response from allOrders: ');
                console.log(res);
                setOrder(res.data);
            }
        );
    };

    useEffect(() => {getOrders()},[]);

    return (
        <div className={'basket-list'}>
            <List
                itemLayout="horizontal"
                dataSource={order}
                renderItem={(item:Song) => (
                    <List.Item>
                        <DownloadOutlined style={{
                            color:'#F4951E',
                            fontSize:'24px',
                            paddingRight: '15px'}}
                        />
                        <List.Item.Meta
                            avatar={<Avatar src={item.image}/>}
                            title={<a href="../">{item.name}</a>}
                        />
                        <div>{item.price} €</div>
                        {/*<div style={{paddingLeft:'30px'}}>{item.date}</div>*/}
                    </List.Item>
                )}
            />
        </div>


    )

}

export default OrderHistory;