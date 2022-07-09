import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './MainLayout.module.scss';
import '../scss/libs/_normalize.scss';

const MainLayout: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.wrapper_main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
