import React from 'react';
import { Table, Select, Typography } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { userData } from './UserData';

const { Column } = Table;
const { Option } = Select;

const CustomerList = () => {
  const renderRating = rating => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<StarFilled key={i} style={{ color: i < rating ? '#ffc107' : 'rgba(0, 0, 0, 0.25)' }} />);
    }
    return stars;
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
        <Typography.Title level={3} strong className='primary--color'>
          Customers Lists
        </Typography.Title>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
          <Select defaultValue="orderId" style={{ width: 120 }}>
          <Option value="Filter">Filter</Option>
            <Option value="orderId">Order ID</Option>
            <Option value="date">Date</Option>
          </Select>
        </div>
      </div>
      <Table dataSource={userData} 
      pagination={{ pageSize: 5 }}
      scroll={{ y: 'calc(100vh - 40vh - 100px)' }} 
      >
        <Column title="Order ID" dataIndex="orderId" key="orderId" />
        <Column title="Date" dataIndex="date" key="date" />
        <Column title="Customer" dataIndex="customerName" key="customerName" />
        <Column title="Location" dataIndex="location" key="location" />
        <Column title="Total Spent" dataIndex="totalSpent" key="totalSpent" />
        <Column title="Last Order" dataIndex="lastOrderPrice" key="lastOrderPrice" />
        <Column
          title="Rating"
          dataIndex="rating"
          key="rating"
          render={rating => renderRating(rating)}
        />
        
      </Table>
    </div>
  );
};

export default CustomerList;
