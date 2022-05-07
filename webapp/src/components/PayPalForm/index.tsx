import React from "react";
import {Button} from "antd";
import PayPalLogo from "../PayPalLogo";
import {Form, Input} from "antd";
import "./paypal_form.css";

const PayPalForm = () => {

    return (
        <div className={'form-container flex-col'}>
            <PayPalLogo style={{margin:'0 auto', width:'280px'}}/>
            <div>
                <h1 className={'order-success-text'}>Zahle mit PayPal</h1>
                <h3 className={'order-success-text'}>Gib deine E-Mail Adresse oder Telefonnummer ein um zu starten.</h3>
            </div>
            <div className={'flex-col mail-input-wrapper'}>
                <Form>
                    <Form.Item name={'email'}  rules={[{ type: 'email' }]}>
                        <Input defaultValue={'deineEmail@beispiel.com'} size={'large'}/>
                    </Form.Item>
                </Form>
                <Button type={'primary'} size={'large'}>
                    <a href={'../ordersuccess'}>Bezahlung via PayPal abschließen</a>
                </Button>
            </div>
        </div>
    )
}

export default PayPalForm;