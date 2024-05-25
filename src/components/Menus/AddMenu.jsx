import React from 'react';
import { Form, Input, Button, Upload, Select, Card, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Title } = Typography;

const AddMenu = () => {
  const handleSubmit = (values) => {
    console.log('Form values:', values);
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  return (
    <Card>
      <Title level={3}>Add Menu</Title>
      <Form
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          foodName: '',
          foodPrice: '',
          categories: '',
          upload: []
        }}
      >
        <Form.Item
          label="Food Name"
          name="foodName"
          rules={[{ required: true, message: 'Please enter the food name' }]}
        >
          <Input placeholder="Enter food name" />
        </Form.Item>

        <Form.Item
          label="Food Price"
          name="foodPrice"
          rules={[{ required: true, message: 'Please enter the food price' }]}
        >
          <Input placeholder="Enter food price" />
        </Form.Item>

        <Form.Item
          label="Categories"
          name="categories"
          rules={[{ required: true, message: 'Please select a category' }]}
        >
          <Select placeholder="Select a category">
            <Option value="appetizer">Appetizer</Option>
            <Option value="mainCourse">Main Course</Option>
            <Option value="dessert">Dessert</Option>
            <Option value="beverage">Beverage</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Upload Image"
          name="upload"
          valuePropName="fileList"
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
          rules={[{ required: true, message: 'Please upload an image' }]}
        >
          <Upload name="logo" listType="picture" beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginRight: '8px' }}>
            Submit
          </Button>
          <Button type="default" onClick={handleCancel}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AddMenu;
