import React from "react";
import {Button} from "antd";


const PayPalForm = () => {

    return (
        <div className={'form-container flex-col'}>

            <Button type={'primary'} size={'large'}>
                <a href={'../ordersuccess'}>Bezahlung via PayPal abschließen</a>
            </Button>
        </div>
    )
}

export default PayPalForm;