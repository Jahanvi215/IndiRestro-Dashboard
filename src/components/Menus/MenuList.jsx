import React from 'react';
import { Table, Tag } from 'antd';
import { menuItemsData } from './MenuItemsData';

const MenuList = () => {
  const columns = [
    {
      title: 'Product ID',
      dataIndex: 'productId',
      key: 'productId',
    },
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'productName',
      render: (text, record) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={record.image} alt={text} style={{ width: 50, height: 50, marginRight: 16 }} />
          {text}
        </div>
      ),
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'In Stock' ? 'green' : 'red'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `₹${price}`,
    },
  ];

  return (
    <div>
      <Table 
      dataSource={menuItemsData} 
      columns={columns} 
      pagination={{ pageSize: 5 }} 
      scroll={{ y: 'calc(100vh - 30vh - 40px - 53px)' }}
      />
    </div>
  );
};

export default MenuList;
