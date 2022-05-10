import * as React from "react";
import { Form, Input, Button, Checkbox, Radio } from 'antd';
import "./user-data-form.css";

const UserDataForm = () => {

    return (
        <div className={''}>
            <Form
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                // initialValues={{ size: componentSize }}
                // onValuesChange={onFormLayoutChange}
                // size={componentSize as SizeType}
            >
                <Form.Item className={''} label="Vorname">
                    <Input />
                </Form.Item>
                <Form.Item label="Nachname">
                    <Input />
                </Form.Item>
                <Form.Item label="E-Mail Adresse">
                    <Input />
                </Form.Item>
            </Form>
            <Button type={'primary'}>Speichern</Button>
        </div>


    )

}

export default UserDataForm;