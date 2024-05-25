import React from 'react';
import { Card, Col, Row, Select, Typography, Progress, Button } from 'antd';
import { favoriteDishes, trendingMenus, mostSellingItems, customerPurchaseData } from './analyticsData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const { Option } = Select;
const { Title } = Typography;

const Analytics = () => {
  const renderLineChart = (data) => (
    <LineChart width={400} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="purchases" stroke="#8884d8" />
    </LineChart>
  );

  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <Card 
            title={
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>5 Most Favourite Dishes</span>
                <Button type='link' className='gray--color'>View All</Button>
              </div>
            } 
            bordered={false}
          >
            {favoriteDishes.map((dish, index) => (
              <div key={index} style={{ marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={dish.image} alt={dish.name} style={{ width: 50, height: 50, marginRight: 16 }} />
                  <div>
                    <Typography.Text className='bold-text'>{dish.name}</Typography.Text>
                    <br />
                    <Typography.Text>Total Sales: {dish.totalSales}</Typography.Text>
                    <br />
                    <Typography.Text>Ratings: <span className='red--color'>{dish.ratings} / 5</span> </Typography.Text>
                  </div>
                </div>
                <Progress type="circle" percent={dish.percentage} width={50} />
              </div>
            ))}
          </Card>
        </Col>
        <Col span={12}>
          <Card 
            title={
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Daily Trending Menus</span>
                <Button type='link' className='gray--color'>View All</Button>
              </div>
            } 
            bordered={false}
          >
            {trendingMenus.map((menu, index) => (
              <div key={index} style={{ marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={menu.image} alt={menu.name} style={{ width: 50, height: 50, marginRight: 16 }} />
                  <Typography.Text className='bold-text'>{index + 1}. {menu.name}</Typography.Text>
                </div>
                <div>
                <Typography.Text className='blue--color bold-text font-1'>#{index + 1}</Typography.Text>
                <br />
                  <Typography.Text>Total Sales: <span className='bold-text'> {menu.totalSales}K</span></Typography.Text>
                  
                 
                </div>
              </div>
            ))}
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={12}>
          <Card 
            title={
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Most Selling Items</span>
                <Button type='link' className='gray--color'>View All</Button>
              </div>
            } 
            bordered={false}
          >
            {mostSellingItems.map((item, index) => (
              <div key={index} style={{ marginBottom: 16, display: 'flex', alignItems: 'center' }}>
                <img src={item.image} alt={item.name} style={{ width: 50, height: 50, marginRight: 16 }} />
                <div>
                  <Typography.Text className='bold-text'>{item.name}</Typography.Text>
                  <Typography.Text style={{ marginLeft: 8 }}>Price: <span className='orange--color bold-text'> {item.price}</span></Typography.Text>
                </div>
              </div>
            ))}
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title="Customer Purchases"
            bordered={false}
            extra={
              <Select defaultValue="today" style={{ width: 120 }}>
                <Option value="today">Today</Option>
                <Option value="weekly">Weekly</Option>
                <Option value="monthly">Monthly</Option>
              </Select>
            }
          >
            {renderLineChart(customerPurchaseData)}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Analytics;
