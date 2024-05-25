import React from 'react'
import { Avatar, Flex, Typography } from 'antd'
import Search from 'antd/es/transfer/search'
import { MessageOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'

const CustomHeader = () => {
  return (
    <div >
        <Flex align='center' justify='space-between' >
            <Typography.Title level={3} type='secondary'>Welcome to my RestroBar</Typography.Title>

            <Flex align='center' gap="3rem">
                <Search placeholder='Search...' allowClear />

                <Flex  align='center' gap='15px'>
                <MessageOutlined className='header-icon'/>
                <NotificationOutlined className='header-icon' />
                <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </Flex>
            </Flex>
        </Flex>
        </div>
  )
}

export default CustomHeader