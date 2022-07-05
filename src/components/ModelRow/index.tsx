import React from 'react';
import styles from './modelrow.module.scss';
import '../../scss/_variables.scss';

const modelRow = [
  { url: './img/argo.png', title: 'Вездеходы Argo' },
  { url: './img/tinger.png', title: 'Вездеходы Tinger' },
  { url: './img/pelets.png', title: 'Вездеходы Пелец' },
];

const ModelRow: React.FC = () => {
  return (
    <div className={styles.modelRow + ' container'}>
      <h2>Модельный ряд</h2>
      <p>
        Группа компаний «Спорт и Отдых» занимается продажей и обслуживанием внедорожной техники и
        вездеходов-амфибий с 1998 года
      </p>
      <div className={styles.modelRow_block}>
        {modelRow.map((obj, i) => (
          <div key={i} className={styles.modelRow_block_item}>
            <div className={styles.modelRow_block_item_photo}>
              <img src={obj.url} alt={obj.title} />
            </div>
            <h3>{obj.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelRow;
