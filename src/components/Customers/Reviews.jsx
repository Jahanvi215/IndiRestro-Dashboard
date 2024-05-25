import React from 'react';
import { Table, Space, Avatar, Typography } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { reviewData } from './ReviewData';

const { Column } = Table;

const Reviews = () => {
  const renderRating = rating => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<StarFilled key={i} style={{ color: i < rating ? '#ffc107' : 'rgba(0, 0, 0, 0.25)' }} />);
    }
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: 4 }}>{rating}</span>
        {stars}
      </div>
    );
  };

  return (
    <div>
      <Typography.Title level={3} className='primary--color'>Reviews</Typography.Title>
      <Table dataSource={reviewData}
       pagination={{ pageSize: 5 }}
       scroll={{ y: 'calc(100vh - 40vh - 50px)' }} >
        <Column
          title="Customer Profile"
          key="profile"
          render={(text, record) => (
            <Space>
              <Avatar src={record.avatar} />
              <div>
                <div className='bold primary--color' >{record.name}</div>
                <div>{record.reviewId}</div>
                <div>{record.date} {record.time}</div>
              </div>
            </Space>
          )}
        />
        <Column title="Review" dataIndex="review" key="review" />
        <Column
          title="Ratings"
          key="rating"
          render={(text, record) => renderRating(record.rating)}
        />
        <Column title="Total Spent" dataIndex="totalSpent" key="totalSpent" />
        <Column
          title="Update"
          key="update"
          render={(text, record) => (
            <Space>
              <a href="#">Delete</a>
              <a href="#">Publish</a>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default Reviews;
