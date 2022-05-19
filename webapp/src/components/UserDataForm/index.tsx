import * as React from "react";
import { Form, Input, Button } from 'antd';
import "./user-data-form.css";
import userservice from "../../services/user.service";

const UserDataForm = () => {
    const storageData = localStorage.getItem('user') + '';
    const user = JSON.parse(storageData);

    const onFinish = (values:any) => {
        //update Request
        userservice.updateUser(user.id, values).then((values) => {
            // setUser(values.data)
            localStorage.setItem('user', JSON.stringify(values.data))
        })
    };

    return (
        <div className={''}>
            <Form
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                onFinish={onFinish}
            >
                <Form.Item className={'dark-ant-form-item-label'} label="Benutzername" name="username">
                    <Input defaultValue={user.username} />
                </Form.Item>
                <Form.Item className={'dark-ant-form-item-label'} label="Passwort" name="password">
                    <Input/>
                </Form.Item>
                <Form.Item className={'dark-ant-form-item-label'} label="Vorname" name="firstname">
                    <Input defaultValue={user.firstname}/>
                </Form.Item>
                <Form.Item className={'dark-ant-form-item-label'} label="Nachname" name="lastname">
                    <Input defaultValue={user.lastname}/>
                </Form.Item>
                <Form.Item className={'dark-ant-form-item-label'} label="E-Mail Adresse" name="email">
                    <Input defaultValue={user.email}/>
                </Form.Item>
                <Form.Item className={'dark-ant-form-item-label'} label="Straße" name="street">
                    <Input defaultValue={user.street}/>
                </Form.Item>
                <Form.Item className={'dark-ant-form-item-label'} label="Hausnummer" name="streetNr">
                    <Input defaultValue={user.streetNr}/>
                </Form.Item>
                <Form.Item className={'dark-ant-form-item-label'} label="Postleitzahl" name="postalCode">
                    <Input defaultValue={user.postalCode}/>
                </Form.Item>
                <Form.Item className={'dark-ant-form-item-label'} label="Stadt" name="city">
                    <Input defaultValue={user.city}/>
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