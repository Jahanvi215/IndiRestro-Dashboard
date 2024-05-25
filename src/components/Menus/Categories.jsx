import React from 'react';
import { Card, Col, Row, Button, Typography, Rate } from 'antd';
import { categoriesData } from './categoriesData';

const { Title } = Typography;

const Categories = () => {
  const renderCategoryItems = (items) => {
    return items.map((item) => (
      <div key={item.id} style={{ marginBottom: 16, display: 'flex', alignItems: 'center' }} >
        <img src={item.image} alt={item.name} style={{ width: 50, height: 50, marginRight: 16 }} />
        <div>
          <Typography.Text >{item.name}</Typography.Text>
          <br />
          <Typography.Text>Price: ₹{item.price}</Typography.Text>
          <br />
          <Rate disabled defaultValue={item.rating} />
        </div>
      </div>
    ));
  };

  return (
    <div>
       <Typography.Title level={3} strong className='primary--color'>Categories</Typography.Title>
      <Row gutter={16}>
        {Object.keys(categoriesData).map((category) => (
          <Col span={12} key={category}>
            <Card
              title={
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Title level={4}>{category}</Title>
                  <Button type="link" className="gray--color">View More</Button>
                </div>
              }
              bordered={false}
            >
              {renderCategoryItems(categoriesData[category])}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Categories;
