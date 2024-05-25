import React, { useState } from 'react';
import { Steps, Card, List, Typography, Avatar, InputNumber } from 'antd';
import { EnvironmentOutlined, UserOutlined } from '@ant-design/icons';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Dummy Data
const orderStatus = [
  { status: 'Order Created', date: '2024-05-01' },
  { status: 'Payment Success', date: '2024-05-02' },
  { status: 'On Delivery', date: '2024-05-03' },
  { status: 'Delivered', date: '2024-05-04' },
];

const initialOrderedItems = [
  { key: '1', 
  name: 'Burger', 
  price: 50, 
  image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600' ,
  quantity: 1 },

  { key: '2', 
  name: 'Pizza', 
  price: 100, 
  image: 'https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=600' ,
  quantity: 1 },

  { key: '3', 
  name: 'Pasta', 
  price: 80, 
  image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600' , 
  quantity: 1 },

  { key: '4', 
  name: 'Fries', 
  price: 40, 
  image: 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600' ,
  quantity: 1 },
];

const userDetails = {
  orderId: '123456',
  name: 'Jahanvi Tharu',
  phone: '9876765487',
  address: '123 colony aishbagh ,Lucknow',
};

const OrderId = () => {
  const [orderedItems, setOrderedItems] = useState(initialOrderedItems);

  const handleQuantityChange = (key, value) => {
    const updatedItems = orderedItems.map(item => {
      if (item.key === key) {
        return { ...item, quantity: value };
      }
      return item;
    });
    setOrderedItems(updatedItems);
  };

  const totalAmount = orderedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const position = [26.8467, 80.9462]; // Dummy coordinates for the map

  return (
    <div style={{ padding: '20px' }}>
        <Typography.Title level={3} strong className='primary--color'>
        Orders Id: {userDetails.orderId}</Typography.Title>
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <Avatar size={64} src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600' />
          <div style={{ marginLeft: '20px' }}>
            <Typography.Title level={4}>Order ID: {userDetails.orderId}</Typography.Title>
            <Typography.Text>Name: {userDetails.name}</Typography.Text><br />
            <Typography.Text>Phone: {userDetails.phone}</Typography.Text><br />
            <Typography.Text>Address: {userDetails.address}</Typography.Text>
          </div>
        </div>
      </Card>

      <Typography.Title level={2} style={{ marginTop: '20px' }}>Order Status</Typography.Title>
      <Steps direction="horizontal" current={2}>
        {orderStatus.map((status, index) => (
          <Steps.Step 
            key={index} 
            title={status.status} 
            description={status.date} 
            style={{ whiteSpace: 'nowrap' }} // Ensure the date is on the same line as the status
          />
        ))}
      </Steps>

      <Typography.Title level={2} style={{ marginTop: '20px' }}>Track Order</Typography.Title>
      <Card>
        <MapContainer center={position} zoom={13} style={{ height: '300px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={new L.Icon({
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
          })}>
            <Popup>
              Your Order is here.
            </Popup>
          </Marker>
        </MapContainer>
      </Card>

      <Typography.Title level={2} style={{ marginTop: '20px' }}>Menu List</Typography.Title>
      <Card>
        <List
          itemLayout="horizontal"
          dataSource={orderedItems}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={item.name}
                description={`Price: ₹${item.price}`}
              />
              <div>
                <InputNumber
                  min={1}
                  value={item.quantity}
                  onChange={value => handleQuantityChange(item.key, value)}
                  style={{ marginRight: '10px' }}
                />
                <Typography.Text>₹{item.price * item.quantity}</Typography.Text>
              </div>
            </List.Item>
          )}
        />
        <Typography.Title level={4} style={{ textAlign: 'right', marginTop: '10px' }}>
          Total Amount: ₹{totalAmount}
        </Typography.Title>
      </Card>
    </div>
  );
};

export default OrderId;
