import React from "react";
import "./components.modules.css";
import CisumLogo from "../CisumLogo";
import Search from "antd/es/input/Search";
import MenuItem from "antd/es/menu/MenuItem";
import Menu from "antd/es/menu"
import {Button} from "antd";

const Header = () => {
    return (
        <div className={"header-container flex-row"}>
            <CisumLogo height={60} fill={'#F4951E'}/>
            <div className={"search-container"}>
                <Search placeholder="input search text" enterButton maxLength={250} loading={false}/>
            </div>
            <Menu mode="horizontal">
                <MenuItem>
                    Shop
                </MenuItem>
                <MenuItem>
                    Warenkorb
                </MenuItem>
                <Button>
                    Login
                </Button>
            </Menu>
        </div>
    )
}

export default Header;