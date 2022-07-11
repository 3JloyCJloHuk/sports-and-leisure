import React from 'react';
import styles from './notfoundpage.module.scss';

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.notfound_block}>
      <h2>Page not found</h2>
      <a href="/">Go home</a>
    </div>
  );
};

export default NotFoundPage;
