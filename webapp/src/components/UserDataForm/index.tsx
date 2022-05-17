import * as React from "react";
import { Form, Input, Button } from 'antd';
import "./user-data-form.css";
import userservice from "../../services/user.service";

const UserDataForm = () => {
    //@TODO check if form items match backend user data

    //@TODO update function, id needs to be a variable
    const onFinish = (values:any) => {
            userservice.updateUser(1, values);
            console.log(values)
    };

    return (
        <div className={''}>
            <Form
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                onFinish={onFinish}
            >
                <Form.Item className={'dark-ant-form-item-label'} label="Vorname" name="username">
                    <Input />
                </Form.Item>
                <Form.Item className={'dark-ant-form-item-label'} label="Nachname">
                    <Input />
                </Form.Item>
                <Form.Item className={'dark-ant-form-item-label'} label="E-Mail Adresse" name="email">
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 16,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Speichern
                    </Button>
                </Form.Item>
            </Form>
        </div>


    )

}

export default UserDataForm;