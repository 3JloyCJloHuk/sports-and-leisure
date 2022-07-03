import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './page/Home';
import NotFoundPage from './page/NotFoundPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
