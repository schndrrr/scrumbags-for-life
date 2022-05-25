import {Avatar, List, message} from "antd";
import {HeartFilled, ShoppingCartOutlined, ShoppingFilled} from "@ant-design/icons";
import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {Song} from "../../classes/Song";
import {useBasket} from "../../states/basket.state";
import {useFavorites} from "../../states/favorites.state";

const Favorites = () => {
    const storageData = localStorage.getItem('user') + '';
    const user = JSON.parse(storageData);
    const [allFavorites, setAllFavorites] = useState([]);

    const basket = useBasket(state => state.basket);
    const setBasket = useBasket(state => state.setBasket);
    const favorites = useFavorites(state => state.favorites);
    const setAddFavorites = useFavorites(state => state.setAddFavorites);
    const setDeleteFavorites = useFavorites(state => state.setDeleteFavorite);


    //have no idea how to replace "props"

    const success = () => {
        message.success('Der Song wurde zum Warenkorb hinzugefügt.');
    };

    //add item to basket
    let tempBasket: Song[] = [];
    const addToBasket = (props:any) => {
        //if basket exist take basket data and add new item
        if (localStorage.getItem('basket')) {
            const storageData = localStorage.getItem('basket') + '';
            tempBasket = JSON.parse(storageData);
            console.log('tempBasket: ' + tempBasket)
            tempBasket.push(props);
            localStorage.setItem('basket', JSON.stringify(tempBasket));
        }
        //create new basket
        else {
            tempBasket.push(props);
            localStorage.setItem('basket', JSON.stringify(tempBasket))
            console.log(localStorage.getItem('basket'))
        }

        setBasket(props.songID);
        console.log('Item added to basket: ' + basket);
        //success message
        success();
    }

    //get favorites from backend
    const getAllFavorites = async () => {
        return await axios.get("http://localhost:8080/favorite/" + user.id).then(
            (res) => {
                console.log('Response from allFav: ');
                console.log(res);
                setAllFavorites(res.data);
            }
        );
    };

    //delete item from fravorites
    const deleteFromFavorites = (e:any) => {
        const id = e.currentTarget.id;
        let tempData = favorites.filter((f: string) =>
            f !== id)
        setDeleteFavorites(tempData);
    };


    useEffect(() => {getAllFavorites()},[]);

    return (
        <div className={'basket-list'}>
            <List
                itemLayout="horizontal"
                dataSource={allFavorites}
                renderItem={(item:Song) => (
                    <List.Item>
                        {/*icon for selecting/deselecting as a favorite*/}
                        <HeartFilled
                            onClick={deleteFromFavorites}
                            id={item.songID}
                            style={{
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
                        {basket.includes(item.songID) ?
                        <ShoppingFilled key="Cart" className={"heart-icon"}
                                        style={{
                                            color:'#F4951E',
                                            fontSize:'24px',
                                            paddingLeft: '8px'}}
                        /> :
                        <ShoppingCartOutlined
                            style={{
                                color:'#F4951E',
                                fontSize:'24px',
                                paddingLeft: '8px'}}
                            onClick={() => addToBasket(item)}
                        />
                        }
                    </List.Item>
                )}
            />
        </div>


    )

}

export default Favorites;