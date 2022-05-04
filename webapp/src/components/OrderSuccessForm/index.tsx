import React from "react";
import "./order_success_form.css";
import {CheckOutlined, DownloadOutlined} from '@ant-design/icons';
import {Button} from "antd";
import {Link} from "react-router-dom";

const OrderSuccessForm = () => {

    return (
        <div className={'order-success-container flex-col'}>
            <CheckOutlined style={{
                    color:'#F4951E',
                    fontSize:'120px',
                    paddingTop:'50px'
            }}
            />
            <div className={'flex-col'}>
                <h1 className={'order-success-text'}>Dein Kauf war erfolgreich!</h1>
                <h2 className={'order-success-text'}>Sie steht dir jederzeit in deinem <Link to={'../user'}>Benutzerkonto</Link> <br/>zum Download zur Verfügung.</h2>
            </div>
            <Button type={'primary'} size={'large'} icon={<DownloadOutlined />}>
                Download
            </Button>
        </div>
    )
}

export default OrderSuccessForm;