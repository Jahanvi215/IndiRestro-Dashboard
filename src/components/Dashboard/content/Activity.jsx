import { Flex, Typography, Button, Avatar, List } from 'antd'
import React from 'react'

const data =[
    {
        username: "Mario",
        orderTime: "1",
        userimg: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        username: "Shwizsa",
        orderTime: "1",
        userimg: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        username: "Olive Green",
        orderTime: "2",
        userimg: "https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        username: "Kaskrata",
        orderTime: "3",
        userimg: "https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        username: "Aplhio",
        orderTime: "5",
        userimg: "https://images.pexels.com/photos/2080382/pexels-photo-2080382.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
]

const Activity = () => {
  return (
    <Flex vertical gap='small'>
         <Flex align='center' justify='space-between' gap='large'>
        <Typography.Title level={4} strong className='primary--color'>
           Recent Activities
        </Typography.Title>
        <Button type='link' className='gray--color'>View All</Button>
    </Flex>

    <List 
    pagination dataSource={data}
    renderItem={(user, index) => (
        <List.Item>
            <List.Item.Meta
            avatar = {<Avatar src={user.userimg}/>}
            title={<a href='#'>{user.username}</a>}
            description = "Ordered a new dish"
            ></List.Item.Meta>
            <span className='gray--color'>
                {user.orderTime} {user.orderTime=== 1 ? "a day ago" : "days ago"}
            </span>
        </List.Item>
    )}
    />
    </Flex>
  )
}

export default Activity