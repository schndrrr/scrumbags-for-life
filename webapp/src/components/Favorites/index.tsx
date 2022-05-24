import {Avatar, List} from "antd";
import {ShoppingCartOutlined, HeartFilled} from "@ant-design/icons";
import * as React from "react";
import {useFavorites} from "../../states/favorites.state";
import axios from "axios";
import {Album} from "../../classes/Album";
import {Artist} from "../../classes/Artist";
import {Song} from "../../classes/Song";
import {searchService} from "../../services/searchService";
import {useEffect, useState} from "react";

//dummy data, @TODO properties for passing data from above
// const data = [
//     {
//         title: 'Feuermelder',
//         description: 'Michael Wendler, Meuerfelder',
//         price: 0.99,
//     },
//     {
//         title: 'Deiner Mutter',
//         description: 'Florian Hager, Mutterwitze',
//         price: 0.99,
//     },
//     {
//         title: 'I love snacks',
//         description: 'Ilvi Löhr, Snacking',
//         price: 0.99,
//     },
//     {
//         title: 'Das sieht scheiße aus',
//         description: 'Thomas Hartmann, Shitstorm',
//         price: 0.99,
//     },
// ];



const Favorites = () => {
    const storageData = localStorage.getItem('user') + '';
    const user = JSON.parse(storageData);
    const [allFavorites, setAllFavorites] = useState([])

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
                        <ShoppingCartOutlined style={{
                            color:'#F4951E',
                            fontSize:'24px',
                            paddingLeft: '8px'}}
                        />
                    </List.Item>
                )}
            />
        </div>


    )

}

export default Favorites;