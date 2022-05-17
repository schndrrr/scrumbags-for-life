import React, {PropsWithChildren} from "react";
import './card.css';
import { Card, Button, Progress } from 'antd';
import { ImportOutlined, HeartOutlined, StepBackwardOutlined, PlayCircleOutlined, StepForwardOutlined } from '@ant-design/icons';

// backend data
type Props = {
    imgSrc: string;
    title: string;
    price: number;
    description: string;
    duration?: number;
}

const { Meta } = Card;

const Cards = (props: Props) => {

    const {imgSrc, price, description, title, duration} = props;

    return (
              <Card
                style={{ width: 280}}
                cover={
                    <img
                        height={280}
                        alt="example"
                        src={imgSrc}
                    />
                }
                actions={[
                    <HeartOutlined key="heart" className={"heart-icon"}/>,
                    <Button type="primary" icon={<ImportOutlined />}>
                        {price} €
                    </Button>
                ]}
            >
                <Meta
                    title={title}
                    description={description}
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