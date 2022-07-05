import React from 'react';
import styles from './FirstScreenHomePage.module.scss';
import '../../scss/_variables.scss';

const FirstScreenHomePage: React.FC = () => {
  return (
    <div className={styles.firstscreen}>
      <div className="container">
        <div className={styles.firstscreen_block}>
          <p>Заменит 5 моделей спецтехники</p>
          <h4>универсальный вездеход</h4>
          <h1>Tinger Armor</h1>
          <button>Узнать подробнее</button>
          <div className={styles.firstscreen_block_info}>
            <div>
              <img src="./img/icon1.png" alt="frame" />
              <p>Легкий и прочный пластиковый корпус</p>
            </div>
            <div>
              <img src="./img/icon2.png" alt="seat" />
              <p>Удобные и безопасные эргономичные сиденья</p>
            </div>
            <div>
              <img src="./img/icon3.png" alt="engine" />
              <p>Экономичный и надежный двигатель</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstScreenHomePage;
