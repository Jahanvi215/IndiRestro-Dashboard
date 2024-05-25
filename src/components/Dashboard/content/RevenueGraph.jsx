import { Card, Typography, Select } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { useState } from 'react';

const { Option } = Select;

const RevenueComponent = () => {
    const [view, setView] = useState('monthly');

    const handleViewChange = (value) => {
        setView(value);
    };

    const monthlyData = [
        { month: 'Jan', revenue: 1000 },
        { month: 'Feb', revenue: 2000 },
        { month: 'Mar', revenue: 1500 },
        { month: 'Apr', revenue: 2500 },
        { month: 'May', revenue: 1800 },
        { month: 'Jun', revenue: 3000 },
        { month: 'Jul', revenue: 3500 },
        { month: 'Aug', revenue: 3100 },
        { month: 'Sept', revenue: 4200 },
        { month: 'Oct', revenue: 4000 },
        { month: 'Nov', revenue: 3100 },
        { month: 'Dec', revenue: 6000 },
    ];

    const dailyData = [
        { day: 'Mon', revenue: 200 },
        { day: 'Tue', revenue: 400 },
        { day: 'Wed', revenue: 300 },
        { day: 'Thu', revenue: 500 },
        { day: 'Fri', revenue: 600 },
        { day: 'Sat', revenue: 700 },
        { day: 'Sun', revenue: 800 },
    ];

    const data = view === 'monthly' ? monthlyData : dailyData;
    const xAxisKey = view === 'monthly' ? 'month' : 'day';

    return (
        <Card
            title="Revenue"
            bordered={false}
            extra={
                <Select defaultValue="monthly" style={{ width: 120 }} onChange={handleViewChange}>
                    <Option value="monthly">Monthly</Option>
                    <Option value="daily">Daily</Option>
                </Select>
            }
        >
            <Typography.Text type="secondary">{view === 'monthly' ? 'Monthly' : 'Daily'} Revenue ⟨₹⟩</Typography.Text>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={xAxisKey} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default RevenueComponent;
