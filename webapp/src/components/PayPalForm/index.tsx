import React from "react";
import {Button, message} from "antd";
import PayPalLogo from "../PayPalLogo";
import {Form, Input} from "antd";
import "./paypal_form.css";

//@TODO email check function???
const checkMail = () => {
    message.success('Bezahlung erfolgreich.')
}

const PayPalForm = () => {

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
                <Button onClick={checkMail} type={'primary'} size={'large'}>
                    <a href={'../ordersuccess'}>Bezahlung via PayPal abschließen</a>
                </Button>
            </div>
        </div>
    )
}

export default PayPalForm;