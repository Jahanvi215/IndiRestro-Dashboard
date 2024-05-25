import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import AppRoutes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
