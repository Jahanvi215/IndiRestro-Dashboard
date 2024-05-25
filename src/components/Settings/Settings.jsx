import React from 'react';
import { Card, Row, Col, Form, Input, Switch, Button, Typography } from 'antd';

const { Title } = Typography;

const Settings = () => {
  const handleSave = (values) => {
    console.log('Saved values:', values);
  };

  return (
    <div>
      <Title level={3}>Settings</Title>
      <Row gutter={16}>
        <Col span={12}>
          <Card title="Profile Settings" bordered={false}>
            <Form layout="vertical" onFinish={handleSave}>
              <Form.Item label="Name" name="name">
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Form.Item label="Phone Number" name="phone">
                <Input placeholder="Enter your phone number" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Notification Settings" bordered={false}>
            <Form layout="vertical" onFinish={handleSave}>
              <Form.Item label="Email Notifications" name="emailNotifications" valuePropName="checked">
                <Switch />
              </Form.Item>
              <Form.Item label="SMS Notifications" name="smsNotifications" valuePropName="checked">
                <Switch />
              </Form.Item>
              <Form.Item label="Push Notifications" name="pushNotifications" valuePropName="checked">
                <Switch />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={12}>
          <Card title="Account Settings" bordered={false}>
            <Form layout="vertical" onFinish={handleSave}>
              <Form.Item label="Change Password" name="password">
                <Input.Password placeholder="Enter new password" />
              </Form.Item>
              <Form.Item label="Confirm Password" name="confirmPassword">
                <Input.Password placeholder="Confirm new password" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Settings;
