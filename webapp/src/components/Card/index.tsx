import React, {useState} from "react";
import './card.css';
import {Button, Card, message} from 'antd';
import {HeartFilled, HeartOutlined, ImportOutlined, PlayCircleOutlined, ShoppingFilled} from '@ant-design/icons';
import {Song} from "../../classes/Song";
import {useFavorites} from "../../states/favorites.state";
import axios from "axios";

// backend data
type Props = Song;


const { Meta } = Card;

const Cards = (props: Props) => {

    const [inBasket,setInBasket] = useState(false);

    const success = () => {
        message.success('Der Song wurde zum Warenkorb hinzugefügt.');
    };

    let basket: Song[] = [];

    const addtoBasket = () => {

        console.log(props)
        //if basket exist take basket data and add new item
        if (localStorage.getItem('basket')) {
            const storageData = localStorage.getItem('basket') + '';
            basket = JSON.parse(storageData);
            basket.push(props);
            localStorage.setItem('basket', JSON.stringify(basket))
        }
        //create new basket
        else {
            basket.push(props);
            localStorage.setItem('basket', JSON.stringify(basket))
            console.log(localStorage.getItem('basket'))
        }

        setInBasket(true);
        //success message
        success();
    }

    const favorites = useFavorites(state => state.favorites);
    const setAddFavorites = useFavorites(state => state.setAddFavorites);
    const setDeleteFavorites = useFavorites(state => state.setDeleteFavorite);

    const storageData = localStorage.getItem('user') + '';
    const user = JSON.parse(storageData);

    const addToFavorites = (e: any) => {
        const id = e.currentTarget.id;
        setAddFavorites(id);
        console.log(favorites);
        axios.post("http://localhost:8080/favorite/" + user.id, {favorite:id})
    };

    const deleteFromFavorites = (e:any) => {
        const id = e.currentTarget.id;
        let tempData = favorites.filter((f: string) =>
            f !== id)
        setDeleteFavorites(tempData);
    }

    const {image, price, album, artist, name, songID} = props;

    return (
              <Card
                style={{ width: 280}}
                cover={
                    <img
                        height={280}
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
                        {!inBasket ?
                        <Button onClick={addtoBasket} type="primary" icon={<ImportOutlined />}>
                            {price} €
                        </Button> :
                        <ShoppingFilled key="Cart" className={"heart-icon"}/>
                        }
                    </div>


                ]}
            >
                <Meta
                    title={name}
                    description={artist + ' - ' + album}
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