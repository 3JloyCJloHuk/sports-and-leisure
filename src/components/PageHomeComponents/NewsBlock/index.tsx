import React from 'react';
import styles from './newsblock.module.scss';
import '../../../scss/_variables.scss';
import { newsItem } from '../../../redux/news/types';
import Loader from '../../Loader';

type NewsBlockProps = {
  news: newsItem[];
  page: number;
  pageCount: number;
  onClickAddPage: () => void;
  status: string;
};

export const tags = [
  { title: 'Участие в выставках', id: '1' },
  { title: 'Новости компании', id: '2' },
  { title: 'Новинки ассортимента', id: '3' },
];

export const NewsBlock: React.FC<NewsBlockProps> = ({
  news,
  page,
  pageCount,
  onClickAddPage,
  status,
}) => {
  return (
    <div className={styles.news + ' container'}>
      {status === 'loading' ? (
        <Loader />
      ) : status === 'success' ? (
        <>
          <h2>Новости</h2>
          <div className={styles.news_block}>
            {news.map((obj) => (
              <div key={obj.id} className={styles.news_block_item}>
                <div className={styles.news_block_item_photo}>
                  <img src={obj.img} alt="argo" />
                  <p
                    className={
                      obj.typeTag === '1'
                        ? styles.news_block_item_photo_green
                        : obj.typeTag === '2'
                        ? styles.news_block_item_photo_blue
                        : styles.news_block_item_photo_red
                    }>
                    {tags.filter((fil) => fil.id === obj.typeTag)[0].title}
                  </p>
                </div>
                <h3>{obj.title}</h3>
                <div className={styles.news_block_item_date}>
                  <p>{obj.date}</p>
                  <p>Подробнее</p>
                </div>
              </div>
            ))}
          </div>
          {pageCount > page && (
            <p className={styles.news_more} onClick={() => onClickAddPage()}>
              Больше новостей
            </p>
          )}
        </>
      ) : (
        <h2>Извините сталась ошибка</h2>
      )}
    </div>
  );
};
