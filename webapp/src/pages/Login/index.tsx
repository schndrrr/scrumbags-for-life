import React, {useState} from "react";
import { Form, Input, Button, Checkbox, Radio } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import "./login.css";
import {Link} from "react-router-dom";

type LayoutType = Parameters<typeof Form>[0]['layout'];

const Login = () => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');
    const [isRegistered, setIsRegistered] = useState(false);
    const onFinish = (values:any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo:any) => {
        console.log('Failed:', errorInfo);
    };

    const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
        setFormLayout(layout);
    };

    const changeRegistered = () => {
        setIsRegistered(isRegistered => !isRegistered);
    };

    return (
        <>
            <div className={"formsite"}>
            <div className={"holdform"}>
            <div className={"formbox"}>
                <a href={`../`}>
                    <CloseOutlined className={"close-form"}/>
                </a>
            <Form className={"ant-form ant-form-horizontal"}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                  layout={formLayout}
                  form={form}
                  onValuesChange={onFormLayoutChange}
            >
                <Form.Item name="layout">
                    <Radio.Group value={formLayout}>
                        <Radio.Button onClick={changeRegistered} value="login">Anmelden</Radio.Button>
                        <Radio.Button onClick={changeRegistered} value="register">Registrieren</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                {isRegistered
                    ? <div><Form.Item
                        label="Nutzername"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Bitte geben Sie ihren Nutzernamen an!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Passwort"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Bitte geben Sie ihr Passwort an!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                    >
                    <Checkbox>Anmeldung speichern</Checkbox>
                    </Form.Item>

                    <Form.Item
                    wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                    >
                    <Button type="primary" htmlType="submit">
                    Anmelden
                    </Button>
                    </Form.Item></div>
                    : <div><Form.Item
                    label="Nutzername"
                    name="username"
                    rules={[
                {
                    required: true,
                    message: 'Bitte geben Sie ihren Nutzernamen an!',
                },
                    ]}
                    >
                    <Input />
                    </Form.Item>
                        <Form.Item
                            label="E-Mail Adressse"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Bitte geben Sie ihre E-Mail an!',
                                },
                            ]}
                        >
                            <Input type="email"/>
                        </Form.Item>

                    <Form.Item
                    label="Passwort"
                    name="password"
                    rules={[
                {
                    required: true,
                    message: 'Bitte geben Sie ihr Passwort an!',
                },
                    ]}
                    >
                    <Input.Password />
                    </Form.Item>

                    <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                    >
                    <Checkbox>Anmeldung speichern</Checkbox>
                    </Form.Item>

                    <Form.Item
                    wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                    >
                    <Button type="primary" htmlType="submit">
                    Anmelden
                    </Button>
                    </Form.Item></div>
                }
            </Form>
            </div>
            </div>
            </div>
        </>
    )
}

export default Login;