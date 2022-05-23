import React, {useState} from "react";
import './card.css';
import { Card, Button, Progress, message } from 'antd';
import {
    ImportOutlined,
    HeartOutlined,
    StepBackwardOutlined,
    PlayCircleOutlined,
    StepForwardOutlined,
    ShoppingFilled
} from '@ant-design/icons';

// backend data
type Props = {
    imgSrc: string;
    title: string;
    price: number;
    album: string;
    duration?: number;
    artist: string;
    id: string;
}


const { Meta } = Card;

const Cards = (props: Props) => {

    const [inBasket,setInBasket] = useState(false);

    const success = () => {
        message.success('Der Song wurde zum Warenkorb hinzugefügt.');
    };

    let basket: {
        imgSrc: string;
        title: string;
        price: number;
        album: string;
        duration?: number;
        artist: string;
        id: string;
    }[] = [];

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

    const {imgSrc, price, album, artist, title} = props;

    return (
              <Card
                style={{ width: 280}}
                cover={
                    <img
                        height={208}
                        alt="example"
                        src={imgSrc}
                    />
                }
                actions={[
                    <HeartOutlined key="heart" className={"heart-icon"}/>,
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
                    title={title}
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