import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import OrderList from './components/Orders/OrderList';
import OrderId from './components/Orders/OrderId/OrderId';
import AddMenu from './components/Menus/AddMenu';
import MenuList from './components/Menus/MenuList';
import Categories from './components/Menus/Categories';
import CustomerList from './components/Customers/CustomerList';
import Reviews from './components/Customers/Reviews';
import Analytics from './components/Analytics/Analytics';
import Settings from './components/Settings/Settings';
import Logout from './components/Logout/Logout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/order-list" element={<OrderList />} />
      <Route path="/order-id" element={<OrderId />} />
      <Route path="/add-menu" element={<AddMenu />} />
      <Route path="/menu-list" element={<MenuList />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/customers-list" element={<CustomerList />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default AppRoutes;
