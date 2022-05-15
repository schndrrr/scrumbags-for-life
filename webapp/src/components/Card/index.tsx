import React, {PropsWithChildren} from "react";
import './card.css';
import { Card, Button, Progress } from 'antd';
import { ImportOutlined, HeartOutlined, StepBackwardOutlined, PlayCircleOutlined, StepForwardOutlined } from '@ant-design/icons';

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
        <>
          <div> <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src={ imgSrc}
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
                  <div className={"card-player"}>
                    {/*<StepBackwardOutlined className={"card-player-icon"}/>*/}
                    <PlayCircleOutlined className={"card-player-icon"}/>
                    {/*<StepForwardOutlined className={"card-player-icon"}/>*/}
                  </div>
                  <div className={"card-progressbar"}>
                      <Progress percent={80} showInfo={false}/>
                  </div>
              </div>
            </Card>
          </div>
        </>
    )
}

export default Cards;