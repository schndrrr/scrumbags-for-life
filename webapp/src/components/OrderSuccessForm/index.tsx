import React from "react";
import "./order_success_form.css";
import {CheckOutlined, DownloadOutlined} from '@ant-design/icons';
import {Button} from "antd";
import {Link} from "react-router-dom";
import CisumBannerLogo from "../../assets/CISUM_LOGO_800_450_px.png";

//@TODO implement onDownload function
const onDownload = () => {
    console.log('Download succesful')
}

const OrderSuccessForm = () => {

    return (
        <div className={'form-container flex-col'}>
            <CheckOutlined style={{
                    color:'#F4951E',
                    fontSize:'120px',
                    paddingTop:'50px'
            }}
            />
            <div className={'flex-col'}>
                <h1 className={'order-success-text'}>Dein Kauf war erfolgreich!</h1>
                <h2 className={'order-success-text'}>Deine Musik kann jederzeit im <Link to={'../user'}>Benutzerkonto</Link> <br/>heruntergeladen werden.</h2>
            </div>
            <a href={'../user'}>
                <Button onClick={onDownload} style={{width:'100%'}} type={'primary'} size={'large'} icon={<DownloadOutlined />}>
                    Download
                </Button>
            </a>
            <div className={'order-container-logo'}>
                <img src={CisumBannerLogo} height={450} width={800} className={'order-container-logo-left'}/>
                <img src={CisumBannerLogo} height={450} width={800} className={'order-container-logo-right'}/>
            </div>
        </div>
    )
}

export default OrderSuccessForm;