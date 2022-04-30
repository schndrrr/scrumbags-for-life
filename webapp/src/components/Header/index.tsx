import React from "react";
import "./header.css";
import CisumLogo from "../CisumLogo";
import Search from "antd/es/input/Search";
import MenuItem from "antd/es/menu/MenuItem";
import { Menu, MenuProps } from 'antd';
import {Button} from "antd";

const items: MenuProps['items']  = [
    {
        label: 'Shop',
        key: 'shop',
    },
    {   label: 'Warenkorb',
        key: 'basket'
    },
    {   label: 'Login',
        key: 'login'
    },
];

const Header = () => {
    return (
        <div className={"header-container flex-row"}>
            <CisumLogo height={60} fill={'#F4951E'}/>
            <div className={"search-container"}>
                <Search placeholder="input search text" enterButton maxLength={250} loading={false}/>
            </div>
            <Menu className={'header-menu'} mode="horizontal" items={items}/>
        </div>
    )
}

export default Header;