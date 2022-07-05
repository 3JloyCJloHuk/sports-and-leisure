import React from 'react';
import styles from './helpblock.module.scss';
import '../../scss/_variables.scss';

const HelpBlock: React.FC = () => {
  return (
    <div className={styles.help}>
      <div className={styles.help_block}>
        <h2>Нужна помощь в выборе вездехода?</h2>
        <p>Получите консультацию нашего специалиста!</p>
        <button>Получить консультацию</button>
      </div>
    </div>
  );
};

export default HelpBlock;
