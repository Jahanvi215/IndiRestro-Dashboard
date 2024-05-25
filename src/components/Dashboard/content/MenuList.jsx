import { Button, Card, Flex, Typography, Image } from 'antd'
import React from 'react'
import MenuData from '../../../MenuData'

const { Meta } = Card;
const MenuList = () => {
  return (
    <>
    <Flex align='center' justify='space-between'>
        <Typography.Title level={3} strong className='primary--color'>
        My Top Listings
        </Typography.Title>
        <Button type='link' className='gray--color'>View All</Button>
    </Flex>

    <Flex align='center' gap='large'>
        {MenuData.map((menu) => (
            <Card key={menu.id} hoverable className='menu-card'>
                <Image src={menu.picture} style={{ width: "100%", height: "160px", objectFit:"cover"}} />
                <Meta title={menu.myname} style={{marginTop: "1rem"}} />
            </Card>
        ) )}
    </Flex>
    </>
  )
}

export default MenuList