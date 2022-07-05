import React from 'react';
import styles from './newsblock.module.scss';
import '../../scss/_variables.scss';

const NewsBlock: React.FC = () => {
  return (
    <div className={styles.news + ' container'}>
      <h2>Новости</h2>
      <div className={styles.news_block}>
        <div className={styles.news_block_item}>
          <div className={styles.news_block_item_photo}>
            <img src="./img/Rectangle.png" alt="argo" />
            <p className={styles.news_block_item_photo_blue}>Участие в выставках</p>
          </div>
          <h3>Новый ARGO Aurora 950 SX на битве вездеходов</h3>
          <div className={styles.news_block_item_date}>
            <p>27 октября 2021</p>
            <p>Подробнее</p>
          </div>
        </div>
        <div className={styles.news_block_item}>
          <div className={styles.news_block_item_photo}>
            <img src="./img/Rectangle.png" alt="argo" />
            <p className={styles.news_block_item_photo_blue}>Участие в выставках</p>
          </div>
          <h3>Новый ARGO Aurora 950 SX на битве вездеходов</h3>
          <div className={styles.news_block_item_date}>
            <p>27 октября 2021</p>
            <p>Подробнее</p>
          </div>
        </div>
        <div className={styles.news_block_item}>
          <div className={styles.news_block_item_photo}>
            <img src="./img/Rectangle.png" alt="argo" />
            <p className={styles.news_block_item_photo_blue}>Участие в выставках</p>
          </div>
          <h3>Новый ARGO Aurora 950 SX на битве вездеходов</h3>
          <div className={styles.news_block_item_date}>
            <p>27 октября 2021</p>
            <p>Подробнее</p>
          </div>
        </div>
      </div>
      <p className={styles.news_more}>Больше новостей</p>
    </div>
  );
};

export default NewsBlock;
