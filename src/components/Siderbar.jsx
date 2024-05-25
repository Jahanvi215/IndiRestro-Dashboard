import React from 'react'
import { Flex, Menu, Typography } from 'antd'
import { RiRestaurantFill } from "react-icons/ri";
import { 
    AppstoreOutlined,
    CarryOutOutlined, 
    LineChartOutlined, 
    LogoutOutlined, 
    OrderedListOutlined, 
    SettingOutlined, 
    UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const Siderbar = ({ collapsed }) => {
  return (
    <>
      <Flex align='center' justify='center'>
        <div className="logo">
          <RiRestaurantFill />
          {!collapsed && <Typography.Title level={3}>IndiRestroBar</Typography.Title>}
        </div>
      </Flex>

      <Menu mode='inline' 
            defaultSelectedKeys={['1']} 
            className='menu-bar'>
        <Menu.Item key='1' icon={<AppstoreOutlined/>}><Link to='/'>Dashboard</Link> </Menu.Item>
        
        <SubMenu key='2' icon={<CarryOutOutlined/>} title="Orders">
          <Menu.Item key='2-1'><Link to='/order-list'>Order List</Link></Menu.Item>
          <Menu.Item key='2-2'><Link to='/order-id'>Order ID</Link></Menu.Item>
        </SubMenu>
        
        <SubMenu key='3' icon={<OrderedListOutlined/>} title="Menus">
          <Menu.Item key='3-1'><Link to='/add-menu'>Add Menu</Link></Menu.Item>
          <Menu.Item key='3-2'><Link to='/menu-list'>Menu List</Link></Menu.Item>
          <Menu.Item key='3-3'><Link to='/categories'>Categories</Link></Menu.Item>
        </SubMenu>

        <SubMenu key='4' icon={<UserOutlined/>} title="Customers">
        <Menu.Item key='4-1' ><Link to='/customers-list'>Customers List</Link></Menu.Item>
        <Menu.Item key='4-2' ><Link to='/reviews'>Reviews</Link></Menu.Item>
        </SubMenu>
        <Menu.Item key='5' icon={<LineChartOutlined/>}><Link to='/analytics'>Analytics</Link></Menu.Item>
        <Menu.Item key='6' icon={<SettingOutlined/>}><Link to='/settings'>Settings</Link></Menu.Item>
        <Menu.Item key='7' icon={<LogoutOutlined/>}><Link to='/logout'>Logout</Link></Menu.Item>
      </Menu>
    </>
  )
}

export default Siderbar;
