import { Card, Typography, Select, Button, Flex } from 'antd';
import React, { useState } from 'react';
import "../../../App.css"

const { Option } = Select;

const OrderSummary = () => {
    const [view, setView] = useState('monthly');

    const handleViewChange = (value) => {
        setView(value);
    };

    const monthlyData = {
        onDelivery: "1245k",
        totalDelivered: "576k",
        cancelled: "39k",
        totalProcess: "2256k"
    };

    const weeklyData = {
        onDelivery: "320k",
        totalDelivered: "150k",
        cancelled: "10k",
        totalProcess: "600k"
    };

    const dailyData = {
        onDelivery: "60k",
        totalDelivered: "30k",
        cancelled: "2k",
        totalProcess: "150k"
    };

    const data = view === 'monthly' ? monthlyData : view === 'weekly' ? weeklyData : dailyData;

    return (
        <Card
            title="Order Summary"
            bordered={false}
            extra={
                <Select defaultValue="monthly" style={{ width: 120 }} onChange={handleViewChange}>
                    <Option value="monthly">Monthly</Option>
                    <Option value="weekly">Weekly</Option>
                    <Option value="daily">Daily</Option>
                </Select>
            }
        >
            <div >
                <div className='flex'>
                    <Flex className='p-1'>
                    <Typography.Text >
                        <span className='bold'>{data.onDelivery}</span> <br/> 
                         On Delivery </Typography.Text>
                    </Flex>
                    <Flex className='p-1'>
                    <Typography.Text>
                        <span className='bold'>{data.totalDelivered}</span> <br/>
                        Total Delivered</Typography.Text>
                    </Flex>
                    </div>
                    <div  className='flex'>
                    <Flex className='p-1'>
                    <Typography.Text> 
                        <span className='bold'>{data.cancelled}</span> <br/>
                     Cancelled </Typography.Text>
                    </Flex>
                    <Flex className='p-1'>
                    <Typography.Text> 
                        <span className='bold'>{data.totalProcess}</span>  <br />
                        Total Process </Typography.Text>
                    </Flex>
                </div>
            </div>
            <Flex style={{padding: "1rem 0"}} justify='space-between'>
                    <Typography.Text>New Order - <span 
                    style={{
                      background: "limegreen",
                     color:"#fff", 
                     padding: ".3rem .5rem",
                     borderRadius: "5px",
                     fontWeight: "600",
                     }}>
                        245k</span></Typography.Text>
                    <div >
                    <Button className='secondary--color'>View All</Button>
            </div>
                </Flex>
        </Card>
    );
};

export default OrderSummary;
