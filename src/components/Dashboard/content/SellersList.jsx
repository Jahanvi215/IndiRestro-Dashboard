import { Avatar, Button, Card, Divider, Flex, Tooltip, Typography } from 'antd'
import React from 'react'

const SellersList = () => {
  return (
    <div align='center' justify='space-between' gap='large'>
        <Flex gap='small' className='top-seller' vertical="row">
            <Flex align='center' justify='space-between' >
                <Typography.Title level={5} strong className='primary--color' >Top Seller</Typography.Title>
                <Button type='link' className='gray--color'>View All</Button>
            </Flex>
            <Card>
                <Flex align='center' justify='space-evenly'>
                    <Avatar.Group
                    maxCount={4}
                    maxPopoverTrigger='click'
                    size='large'
                    maxStyle={{
                        color: "#f56a00",
                        backgroundColor: "#fde3cf",
                        cursor: "progress",
                    }}
                    >
                        <Tooltip title='User 1' placement='top' >
                            <Avatar src="https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </Tooltip>
                        <Tooltip title='User 2' placement='top' >
                            <Avatar src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </Tooltip>
                        <Tooltip title='User 3' placement='top' >
                            <Avatar src="https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </Tooltip>
                        <Tooltip title='User 4' placement='top' >
                            <Avatar src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </Tooltip>
                        <Tooltip title='User 5' placement='top' >
                            <Avatar src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </Tooltip>
                        <Tooltip title='User 6' placement='top' >
                            <Avatar src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </Tooltip>
                        <Tooltip title='User 7' placement='top' >
                            <Avatar src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </Tooltip>
                    </Avatar.Group>

                    <Divider type='vertical' className='divider' />
                        <Flex vertical='row'>
                            <Typography.Text type='secondary' strong>
                                200+ food sold.
                            </Typography.Text>
                            <Typography.Text type='secondary' strong>
                                10 sellers.
                            </Typography.Text>
                        </Flex>
                </Flex>
            </Card>
        </Flex>

        <Flex gap='small' className='featured-seller' vertical="row">
            <Flex align='center' justify='space-between' >
                <Typography.Title level={5} strong className='primary--color' >Featured Seller</Typography.Title>
                <Button type='link' className='gray--color'>View All</Button>
            </Flex>
            <Card>
                <Flex align='center' justify='space-evenly'>
                    <Avatar.Group
                    maxCount={4}
                    maxPopoverTrigger='click'
                    size='large'
                    maxStyle={{
                        color: "#f56a00",
                        backgroundColor: "#fde3cf",
                        cursor: "progress",
                    }}
                    >
                        <Tooltip title='User 1' placement='top' >
                            <Avatar src="https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </Tooltip>
                        <Tooltip title='User 2' placement='top' >
                            <Avatar src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </Tooltip>
                        <Tooltip title='User 3' placement='top' >
                            <Avatar src="https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </Tooltip>
                        <Tooltip title='User 4' placement='top' >
                            <Avatar src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </Tooltip>
                        <Tooltip title='User 5' placement='top' >
                            <Avatar src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </Tooltip>
                        <Tooltip title='User 6' placement='top' >
                            <Avatar src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </Tooltip>
                        <Tooltip title='User 7' placement='top' >
                            <Avatar src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </Tooltip>
                    </Avatar.Group>

                    <Divider type='vertical' className='divider' />
                        <Flex vertical='row'>
                            <Typography.Text type='secondary' strong>
                                150+ food sold.
                            </Typography.Text>
                            <Typography.Text type='secondary' strong>
                                20+ happy customers.
                            </Typography.Text>
                        </Flex>
                </Flex>
            </Card>
        </Flex>

    </div>
  )
}

export default SellersList