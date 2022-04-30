import React from "react";
import "./header.css";
import CisumLogo from "../CisumLogo";
import Search from "antd/es/input/Search";
import { Menu, MenuProps } from 'antd';
import { ShoppingCartOutlined, LoginOutlined } from '@ant-design/icons';

const items: MenuProps['items']  = [
    {
        title: 'SHOP',
        label: 'Shop',
        key: 'shop',
    },
    {   label: 'Login',
        key: 'login',
        icon: <LoginOutlined />,
    },
    {   label: 'Warenkorb',
        key: 'basket',
        icon: <ShoppingCartOutlined />,
    },
    {
        label: 'Impressum',
        key: 'imprint'
    }
];

const Header = () => {
    return (
        <div className={"header-container flex-row"}>
            <CisumLogo fill={'#F4951E'}/>
            <div className={"search-container"}>
                <Search placeholder="Finde deinen Lieblingssong" enterButton maxLength={250} loading={false}/>
            </div>
            <Menu className={'header-menu'} mode="horizontal" items={items} defaultSelectedKeys={['shop']} disabledOverflow={true}/>
        </div>
    )
}

export default Header;