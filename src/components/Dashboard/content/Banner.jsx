import { Card, Typography, Flex, Button, Avatar } from 'antd'
import React from 'react'
import { LuMenuSquare } from "react-icons/lu";
import { MdCurrencyRupee } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import './banner.scss'

const bannerData = [
    {
        title: "Total Menus",
        range: "2567",
        icon: <LuMenuSquare />,
    },
    {
        title: "Total Revenew",
        range: "87,567",
        icon: <MdCurrencyRupee />,
    },
    {
        title: "Total Customers",
        range: "2768k",
        icon: <FaUsers />,
    },
    {
        title: "Total Orders",
        range: "2580",
        icon: <IoIosRocket />,
    },

]
const Banner = () => {
  return (
    <div className='banner-container'>
    {/* <Card style={{height: 260, padding: '10px'}}>
        <Flex vertical gap="30px">
            <Flex vertical align='flex-start'>
            <Typography.Title level={2} strong>
                Create and Sell Products
            </Typography.Title>

            <Typography.Text type='secondary' strong>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates dolorem ab magni at quasi ea id officiis eveniet ipsa reiciendis!
            </Typography.Text>
        </Flex>

        <Flex gap="large" >
            <Button type="primary" size="large">Explore More</Button>
            <Button size='large'>Top Sellers</Button>
        </Flex>
        </Flex>
    </Card> */}
    {bannerData.map((item, index) => (
                <Card className='banner-card' key={index}>
                    <Flex align='center' justify='space-between'>
                        <Flex className='icon-img'>{item.icon}</Flex>
                        <Flex className='menu-text'>
                            <Typography.Title level={4} strong>{item.range}</Typography.Title>
                            <Flex>
                                <Typography.Text type='secondary' strong>{item.title}</Typography.Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Card>
            ))}
    </div>
  )
}

export default Banner