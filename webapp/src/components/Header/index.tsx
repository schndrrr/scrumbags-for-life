import React from "react";
import "./header.css";
import CisumLogo from "../CisumLogo";
import Search from "antd/es/input/Search";
import { Menu } from 'antd';
import { ShoppingCartOutlined, LoginOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import { searchService } from "../../services/searchService";
import {useSearchSong} from "../../states/songResponse.state";

type Props = {
    searchActive: boolean
    }

//@TODO search function

const Header = (props:Props) => {

    const setSongResult = useSearchSong(state => state.setSongResult);

    const onSearch = async (values:any) => {
        const response = await searchService(values);
        setSongResult(response);
    }

    return (
        <div className={"header-container flex-row"}>
            {/*logo as link to homepage*/}
            <Link className={'flex flex-center'} to={'../'}>
                <CisumLogo fill={'#F4951E'}/>
            </Link>
            {/*conditional rendering with/without searchbar*/}
            {props.searchActive &&
            <div className={"search-container"}>
                <Search onSearch={onSearch} placeholder="Finde deinen Lieblingssong" enterButton maxLength={250} loading={false}/>
            </div>
            }
            {/*navigation menu*/}
            <div>
                <Menu className={'header-menu'} mode="horizontal" defaultSelectedKeys={[]} disabledOverflow={true}>
                    {localStorage.getItem('user') ?
                    <Menu.Item key={'user'}>
                        <Link to={`../user`}>Benutzerkonto</Link>
                    </Menu.Item> :
                    <Menu.Item key={'login'} icon={<LoginOutlined/>}>
                    <Link to={`../login`}>Login</Link>
                    </Menu.Item>}
                    <Menu.Item key={'shop'}>
                        <Link to={`../`}>Shop</Link>
                    </Menu.Item>
                    <Menu.Item key={'basket'} icon={<ShoppingCartOutlined />}>
                        <Link to={`../basket`}>Warenkorb</Link>
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    )
}

export default Header;