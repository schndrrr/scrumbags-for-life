import * as React from "react";
import { Form, Input, Button } from 'antd';
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
                <Form.Item className={'dark-ant-form-item-label'} label="Vorname">
                    <Input />
                </Form.Item>
                <Form.Item className={'dark-ant-form-item-label'} label="Nachname">
                    <Input />
                </Form.Item>
                <Form.Item className={'dark-ant-form-item-label'} label="E-Mail Adresse">
                    <Input />
                </Form.Item>
            </Form>
            <div className={'flex flex-end'}>
                <Button type={'primary'} size={'large'}>Speichern</Button>
            </div>
        </div>


    )

}

export default UserDataForm;