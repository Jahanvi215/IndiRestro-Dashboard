import React from 'react';
import { Layout, Button } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import Siderbar from './Siderbar';
import CustomHeader from './Header';
import { useState } from 'react';

const { Sider, Header, Content } = Layout;

const MainLayout = ({ children}) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider 
        theme='light' 
        trigger={null} 
        collapsible 
        collapsed={collapsed} 
        className='sider'
      >
        <Siderbar collapsed={collapsed} />
        <Button
          type='text' 
          icon={collapsed ? <LeftCircleOutlined className='arrow-icon' /> : <RightCircleOutlined className='arrow-icon' />}
          onClick={() => setCollapsed(!collapsed)}
          className='trigger-btn'
        ></Button>
      </Sider>
      <Layout>
        <Header className='header'>
          <CustomHeader />
        </Header>
        <Content className='content'>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
