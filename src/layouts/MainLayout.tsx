import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';

const MainLayout: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <header>header</header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default MainLayout;
