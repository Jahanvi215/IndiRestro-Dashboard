import React, { useState } from 'react';
import { Table, Select, Typography } from 'antd';
import { orderColumns, orderData } from './OrderData';

const { Option } = Select;

const OrderList = () => {
  const [data, setData] = useState(orderData);

  const handleStatusChange = (orderId, value) => {
    const updatedData = data.map(order => {
      if (order.key === orderId) {
        return { ...order, status: value };
      }
      return order;
    });

    setData(updatedData);
  };

  const statusOptions = ['New Order', 'On Delivery', 'Delivered'];

  const renderStatusSelect = (text, record) => (
    <Select
      value={record.status}
      style={{ width: 120 }}
      onChange={value => handleStatusChange(record.key, value)}
    >
      {statusOptions.map(option => (
        <Option
          key={option}
          value={option}
          style={{ color: getStatusColor(option) }}
        >
          {option}
        </Option>
      ))}
    </Select>
  );

  const getStatusColor = status => {
    switch (status) {
      case 'New Order':
        return 'green';
      case 'On Delivery':
        return 'orange';
      case 'Delivered':
        return 'blue';
      default:
        return 'inherit';
    }
  };

  const columnsWithStatusSelect = [
    ...orderColumns,
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: renderStatusSelect,
    },
  ];

  return (
    <div >
      <Typography.Title level={3} strong className='primary--color'>Orders List</Typography.Title>
      <div >
        <Table 
          dataSource={orderData} 
          columns={columnsWithStatusSelect} 
          pagination={{ pageSize: 5 }}
          scroll={{ y: 'calc(100vh - 30vh - 40px - 53px)' }} 
        />
      </div>
      </div>
  );
};

export default OrderList;
