import {Divider} from "antd";
import * as React from "react";
import { Radio, Space } from 'antd';
import {useState} from "react";


const PaymentPicker = () => {

    const [value, setValue] = useState(1);

    //allows to change payment method, if available
    const handleChange = (event: any) => {
        setValue(event.target.value);
    };


    return (
        <div className={'user-data-container flex-col'}>
            <Divider orientation={'left'} className={'data-field-label'}>Zahlungsarten</Divider>
            <Radio.Group onChange={handleChange} value={value}>
                <Space direction="vertical">
                    <Radio value={1}>PayPal</Radio>
                    <Radio disabled={true} value={2}>Visa, MasterCard</Radio>
                    <Radio disabled={true} value={3}>Rechnung</Radio>
                </Space>
            </Radio.Group>
        </div>
    )

}

export default PaymentPicker