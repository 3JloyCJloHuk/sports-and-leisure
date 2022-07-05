import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import styles from './MainLayout.module.scss';

const MainLayout: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <header>header</header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
