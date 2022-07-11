import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './page/Home';

const NotFoundPage = React.lazy(
  () => import(/* webpackChunkName: "NotFoundPage" */ './page/NotFoundPage'),
);

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="*"
          element={
            <Suspense>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
