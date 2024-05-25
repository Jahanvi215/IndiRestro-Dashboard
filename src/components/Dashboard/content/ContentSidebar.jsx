import React from 'react'
import { Flex, Card, Typography, Image } from 'antd'
import food from "../../../assets/food2.jpg"

const ContentSidebar = () => {
  return (
    <div>
        <Card className='card'>
            <Flex vertical gap='large'>
                <Typography.Title level={4} strong >
                    Today <br/> 5 orders
                </Typography.Title>
                <Typography.Title level={4} strong >
                    This month <br/> 285 orders
                </Typography.Title>
            </Flex>
            <Image src={food } alt='food'
            style={{
                position: "absolute",
                bottom: -5,
                left: 120,
                height: "200px",
                width: "150px",
                objectFit: "cover"

            }}
            />
        </Card>
    </div>
  )
}

export default ContentSidebar