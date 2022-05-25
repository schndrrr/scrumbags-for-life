import React from "react";
import './card.css';
import {Button, Card, message} from 'antd';
import {HeartFilled, HeartOutlined, ImportOutlined, PlayCircleOutlined, ShoppingFilled} from '@ant-design/icons';
import {Song} from "../../classes/Song";
import {useFavorites} from "../../states/favorites.state";
import axios from "axios";
import {useBasket} from "../../states/basket.state";

// backend data
type Props = Song;


const { Meta } = Card;

const Cards = (props: Props) => {
    const favorites = useFavorites(state => state.favorites);
    const setAddFavorites = useFavorites(state => state.setAddFavorites);
    const setDeleteFavorites = useFavorites(state => state.setDeleteFavorite);
    const basket = useBasket(state => state.basket);
    const setBasket = useBasket(state => state.setBasket);

    const storageData = localStorage.getItem('user') + '';
    const user = JSON.parse(storageData);

    const success = () => {
        message.success('Der Song wurde zum Warenkorb hinzugefügt.');
    };

    //add item to basket
    let tempBasket: Song[] = [];
    const addToBasket = (e:any) => {
        //if basket exist take basket data and add new item
        if (localStorage.getItem('basket')) {
            const storageData = localStorage.getItem('basket') + '';
            tempBasket = JSON.parse(storageData);
            tempBasket.push(props);
            localStorage.setItem('basket', JSON.stringify(tempBasket));
        }
        //create new basket
        else {
            tempBasket.push(props);
            localStorage.setItem('basket', JSON.stringify(tempBasket))
            console.log(localStorage.getItem('basket'))
        }

        setBasket(e.currentTarget.id);
        console.log('Item added to basket: ' + basket);
        //success message
        success();
    }

    //add item to favorites
    const addToFavorites = (e: any) => {
        const id = e.currentTarget.id;
        setAddFavorites(id);
        console.log(favorites);
        axios.post("http://localhost:8080/favorite/" + user.id, {favorite:id})
    };

    //delete item from fravorites
    const deleteFromFavorites = (e:any) => {
        const id = e.currentTarget.id;
        let tempData = favorites.filter((f: string) =>
            f !== id)
        setDeleteFavorites(tempData);
    }

    const {image, price, artist, name, songID} = props;

    return (
              <Card
                style={{ width: 230}}
                cover={
                    <img
                        height={230}
                        alt="example"
                        src={image}
                    />
                }
                actions={[
                    <div>
                        {favorites.includes(songID) ?
                        <HeartFilled
                            onClick={deleteFromFavorites}
                            key="heart" className={"heart-icon"} id={songID}/>
                        :
                        <HeartOutlined
                            onClick={addToFavorites}
                            key="heart" className={"heart-icon"} id={songID}/>
                        }
                    </div>,
                    <div>
                        {basket.includes(songID) ?
                            <ShoppingFilled key="Cart" className={"heart-icon"}/> :
                            <Button onClick={addToBasket} id={songID} type="primary" icon={<ImportOutlined />}>
                                {price} €
                            </Button>
                        }
                    </div>


                ]}
            >
                <Meta
                    title={name}
                    description={artist}
                />
              <div className={"card-player-progressbar"}>
                  {/*player for sound example, skipping doesn't make much sense in single a song player*/}
                  <div className={"card-player"}>
                    {/*<StepBackwardOutlined className={"card-player-icon"}/>*/}
                    <PlayCircleOutlined className={"card-player-icon"}/>
                    {/*<StepForwardOutlined className={"card-player-icon"}/>*/}
                  </div>
                  {/*time progress, is it needed?*/}
                  {/*<div className={"card-progressbar"}>*/}
                  {/*    <Progress percent={80} showInfo={false}/>*/}
                  {/*</div>*/}
              </div>
            </Card>
    )
}

export default Cards;