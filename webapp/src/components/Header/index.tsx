import React from "react";
import "./header.css";
import CisumLogo from "../CisumLogo";
import Search from "antd/es/input/Search";
import { Menu, MenuProps, Button } from 'antd';
import { ShoppingCartOutlined, LoginOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

type Props = {
    searchActive: boolean
}

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuProps['items']  = [

    getItem(
        <Button type='primary' href="../login" icon={<LoginOutlined/>}>
            Login
        </Button>,
        'login',
    ),
    getItem(
        <Link to={`../`}>Shop</Link>,
        'shop',
    ),
    getItem(
        <Link to={`../basket`}>Warenkorb</Link>,
        'basket',
        <ShoppingCartOutlined />,
    ),
    getItem(
        <Link to={`../imprint`}>Impressum</Link>,
        'imprint',
    ),
];

const Header = (props:Props) => {

    return (
        <div className={"header-container flex-row"}>
            <CisumLogo fill={'#F4951E'}/>
            {props.searchActive &&
            <div className={"search-container"}>
                <Search placeholder="Finde deinen Lieblingssong" enterButton maxLength={250} loading={false}/>
            </div>
            }
            <Menu className={'header-menu'} mode="horizontal" items={items} defaultSelectedKeys={[]} disabledOverflow={true}/>
        </div>
    )
}

export default Header;