import React from 'react';
import styles from './partnersblock.module.scss';
import '../../../scss/_variables.scss';

const partners = [
  { url: './img/роснефть.png', alt: 'роснефть' },
  { url: './img/лукоил.png', alt: 'лукоил' },
  { url: './img/газпром.png', alt: 'газпром' },
  { url: './img/норникель.png', alt: 'норникель' },
  { url: './img/сибур.png', alt: 'сибур' },
];

export const PartnersBlock: React.FC = () => {
  return (
    <div className={styles.partners + ' container'}>
      <div className={styles.partners_block}>
        <h2>Нам доверяют</h2>
        <div>
          {partners.map((obj, i) => (
            <img key={i} src={obj.url} alt={obj.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};
