import { Card, Typography, Select } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { useState } from 'react';

const { Option } = Select;

const CustomerMapComponent = () => {
    const [view, setView] = useState('monthly');

    const handleViewChange = (value) => {
        setView(value);
    };

    const monthlyData = [
        { month: 'Jan', customers: 100 },
        { month: 'Feb', customers: 200 },
        { month: 'Mar', customers: 150 },
        { month: 'Apr', customers: 250 },
        { month: 'May', customers: 180 },
        { month: 'Jun', customers: 300 },
        { month: 'Jul', customers: 250 },
        { month: 'Aug', customers: 200 },
        { month: 'Sept', customers: 400 },
        { month: 'Oct', customers: 340 },
        { month: 'Nov', customers: 430 },
        { month: 'Dec', customers: 500 },
    ];

    const weeklyData = [
        { week: 'Week 1', customers: 50 },
        { week: 'Week 2', customers: 80 },
        { week: 'Week 3', customers: 60 },
        { week: 'Week 4', customers: 90 },
        { week: 'Week 5', customers: 80 },
        { week: 'Week 6', customers: 100 },
    ];

    const dailyData = [
        { day: 'Mon', customers: 20 },
        { day: 'Tue', customers: 40 },
        { day: 'Wed', customers: 30 },
        { day: 'Thu', customers: 50 },
        { day: 'Fri', customers: 60 },
        { day: 'Sat', customers: 70 },
        { day: 'Sun', customers: 80 },
    ];

    const data = view === 'monthly' ? monthlyData : view === 'weekly' ? weeklyData : dailyData;
    const xAxisKey = view === 'monthly' ? 'month' : view === 'weekly' ? 'week' : 'day';

    return (
        <Card
            title="Customer Map"
            bordered={false}
            extra={
                <Select defaultValue="monthly" style={{ width: 120 }} onChange={handleViewChange}>
                    <Option value="monthly">Monthly</Option>
                    <Option value="weekly">Weekly</Option>
                    <Option value="daily">Today</Option>
                </Select>
            }
        >
            <Typography.Text type="secondary">{view === 'monthly' ? 'Monthly' : view === 'weekly' ? 'Weekly' : 'Daily'} Customer Map</Typography.Text>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={xAxisKey} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="customers" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default CustomerMapComponent;
