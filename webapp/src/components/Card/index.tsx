import React from "react";
import './card.css';
import { Card, Avatar, Button, Progress } from 'antd';
import { ImportOutlined, HeartOutlined, StepBackwardOutlined, PlayCircleOutlined, StepForwardOutlined, RetweetOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Cards = () => {

    return (
        <>
          <div> <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    <HeartOutlined key="heart" className={"heart-icon"}/>,
                    <Button type="primary" icon={<ImportOutlined />}>
                        0.99 €
                    </Button>
                ]}
            >
                <Meta
                    title="Happy"
                    description="Happier Than Ever - Billie Eilish"
                />
              <div className={"card-player-progressbar"}>
                  <div className={"card-player"}>
                    <StepBackwardOutlined className={"card-player-icon"}/>
                      <PlayCircleOutlined className={"card-player-icon"}/>
                      <StepForwardOutlined className={"card-player-icon"}/>
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