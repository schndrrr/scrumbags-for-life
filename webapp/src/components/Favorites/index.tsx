import {Avatar, Button, List, message} from "antd";
import {ShoppingCartOutlined, HeartFilled, ImportOutlined, ShoppingFilled} from "@ant-design/icons";
import * as React from "react";
import axios from "axios";
import {Song} from "../../classes/Song";
import {useEffect, useState} from "react";
import {useBasket} from "../../states/basket.state";

const Favorites = () => {
    const storageData = localStorage.getItem('user') + '';
    const user = JSON.parse(storageData);
    const [allFavorites, setAllFavorites] = useState([])

    const basket = useBasket(state => state.basket);
    const setBasket = useBasket(state => state.setBasket);


    //have no idea how to replace "props"

    // const success = () => {
    //     message.success('Der Song wurde zum Warenkorb hinzugefügt.');
    // };
    //
    // //add item to basket
    // let tempBasket: Song[] = [];
    // const addToBasket = (e:any) => {
    //     //if basket exist take basket data and add new item
    //     if (localStorage.getItem('basket')) {
    //         const storageData = localStorage.getItem('basket') + '';
    //         tempBasket = JSON.parse(storageData);
    //         tempBasket.push(props);
    //         localStorage.setItem('basket', JSON.stringify(tempBasket));
    //     }
    //     //create new basket
    //     else {
    //         tempBasket.push(props);
    //         localStorage.setItem('basket', JSON.stringify(tempBasket))
    //         console.log(localStorage.getItem('basket'))
    //     }
    //
    //     setBasket(e.currentTarget.id);
    //     //success message
    //     success();
    // }

    //get favorites from backend
    const getAllFavorites = async () => {
        const response = await axios.get("http://localhost:8080/favorite/" + user.id).then(
            (res) => {
                console.log('Response from allFav: ');
                console.log(res);
                setAllFavorites(res.data);
            }
        )
        return response;
    }

    useEffect(() => {getAllFavorites()},[])

    return (
        <div className={'basket-list'}>
            <List
                itemLayout="horizontal"
                dataSource={allFavorites}
                renderItem={(item:Song) => (
                    <List.Item>
                        {/*icon for selecting/deselecting as a favorite*/}
                        <HeartFilled style={{
                            color:'#F4951E',
                            fontSize:'24px',
                            paddingRight: '15px'
                        }}
                        />
                        {/*items based on backend data*/}
                        <List.Item.Meta
                            avatar={<Avatar src={item.image} />}
                            title={<a href="../">{item.name}</a>}
                        />
                        <div>{item.price} €</div>
                        {/*icon for adding to the basket*/}
                        {/*{basket.includes(item.songID) ?*/}
                        {/*<ShoppingCartOutlined style={{*/}
                        {/*    color:'#F4951E',*/}
                        {/*    fontSize:'24px',*/}
                        {/*    paddingLeft: '8px'}}*/}
                        {/*    onClick={addToBasket}*/}
                        {/*/> :*/}
                        {/*<ShoppingFilled key="Cart" className={"heart-icon"}*/}
                        {/*    style={{*/}
                        {/*    color:'#F4951E',*/}
                        {/*    fontSize:'24px',*/}
                        {/*    paddingLeft: '8px'}}*/}
                        {/*/>*/}
                        {/*}*/}
                    </List.Item>
                )}
            />
        </div>


    )

}

export default Favorites;