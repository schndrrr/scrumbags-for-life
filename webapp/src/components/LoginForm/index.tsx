import React, {useState} from "react";
import { Form, Input, Button, Checkbox, Radio } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import "./login_form.css";
import userservice from "../../services/user.service";

type LayoutType = Parameters<typeof Form>[0]['layout'];

const LoginForm = () => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');
    const [newUser, setNewUser] = useState(false);

    //sending form data to backend
    const onFinish = (values:any) => {       
       if (newUser){
        userservice.createUser(values);}
    };

    //function on failing request
    const onFinishFailed = (errorInfo:any) => {
        console.log('Failed:', errorInfo);
    };

    //activate registration form
    const changeRegistered = () => {
        setNewUser(true);
    };

    //activate login form
    const changeLogged = () => {
        setNewUser(false);
    }

    //form layout
    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 14,
                },
            }
            : null;

    return (
        <>
            <div className={"holdform"}>
                <div className={"formbox r-5"}>
                    <div className={"radiobtn-closeform"}>
                        <Radio.Group value={formLayout}>
                            <Radio.Button onClick={changeLogged} value="login">Anmelden</Radio.Button>
                            <Radio.Button onClick={changeRegistered} value="register">Registrieren</Radio.Button>
                        </Radio.Group>
                        <a href={`../`}>
                            <CloseOutlined className={"close-form"}/>
                        </a>
                    </div>
                    <Form className={"ant-form-horizontal"}
                          name="basic"
                          labelCol={{
                              span: 8,
                          }}
                          wrapperCol={{
                              span: 16,
                          }}
                          initialValues={{
                              remember: true,
                              layout: formLayout
                          }}
                          onFinish={onFinish}
                          onFinishFailed={onFinishFailed}
                          autoComplete="off"
                          {...formItemLayout}
                          layout={formLayout}
                          form={form}
                    >

                        {newUser &&
                        <Form.Item
                            label="E-Mail Adresse"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Bitte geben Sie ihre E-Mail an!',
                                },
                            ]}
                        >
                            <Input className={'ant-input-dark'} type="email"/>
                        </Form.Item>
                        }
                        <div>
                            <Form.Item
                                label="Nutzername"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Bitte geben Sie ihren Nutzernamen an!',
                                    },
                                ]}
                            >
                                <Input className={'ant-input-dark'}/>
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
                                <Input.Password className={'ant-input-dark'}/>
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
                    </Form>
                </div>
            </div>
        </>
    )
}

export default LoginForm;