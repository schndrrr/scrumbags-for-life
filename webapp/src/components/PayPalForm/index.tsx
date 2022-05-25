import React from "react";
import {Button, message} from "antd";
import PayPalLogo from "../PayPalLogo";
import {Form, Input} from "antd";
import "./paypal_form.css";
import {useBasket} from "../../states/basket.state";
import axios from "axios";

const PayPalForm = () => {

    const user = JSON.parse(localStorage.getItem('user')+'');
    const basket = useBasket(state => state.basket);

    const onTransaction = () => {
        console.log('onTransaction clicked');
        axios.post("http://localhost:8080/buy/" + user.id, {basket})
    }

    return (
        <div className={'form-container flex-col'}>
            <PayPalLogo style={{margin:'0 auto', width:'280px'}}/>
            <div>
                <h1 className={'order-success-text'}>Zahle mit PayPal</h1>
                <h3 className={'order-success-text ant-input-dark'}>Gib deine E-Mail Adresse oder Telefonnummer ein um zu starten.</h3>
            </div>
            <div className={'flex-col mail-input-wrapper'}>
                <Form>
                    <Form.Item  name={'email'}  rules={[{ type: 'email' }]}>
                        <Input className={'ant-input-dark'} defaultValue={'deineEmail@beispiel.com'} size={'large'} type={'email'}/>
                    </Form.Item>
                </Form>
                {/*maybe build button in a form item?*/}
                <Button onClick={onTransaction} type={'primary'} size={'large'}>
                    <a href={'../ordersuccess'}>Bezahlung via PayPal abschließen</a>
                </Button>
            </div>
        </div>
    )
}

export default PayPalForm;