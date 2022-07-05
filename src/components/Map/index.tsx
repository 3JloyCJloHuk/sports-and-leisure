import React from 'react';
import styles from './map.module.scss';
import '../../scss/_variables.scss';

const Map: React.FC = () => {
  return (
    <div className={styles.map}>
      <div className={styles.map_block + ' container'}>
        <h2>Мы поставляем технику по всей России для более 3000 частных лиц и предприятий</h2>
        <p>
          География поставок распространяется по всей территории России — от Мурманска, Нарьян-Мара
          и Салехарда до Якутска, Петропавловск-Камчатсвкого и Южно-Сахалинска
        </p>
      </div>
    </div>
  );
};

export default Map;
