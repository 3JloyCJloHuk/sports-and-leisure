import React from 'react';
import styles from './helpblock.module.scss';
import '../../../scss/_variables.scss';

type HelpBlockProps = {
  setPopUp: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HelpBlock: React.FC<HelpBlockProps> = ({ setPopUp }) => {
  return (
    <div className={styles.help}>
      <div className={styles.help_block}>
        <h2>Нужна помощь в выборе вездехода?</h2>
        <p>Получите консультацию нашего специалиста!</p>
        <button onClick={() => setPopUp(true)}>Получить консультацию</button>
      </div>
    </div>
  );
};
