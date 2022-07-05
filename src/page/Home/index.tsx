import React from 'react';
import FirstScreenHomePage from '../../components/FirstScreenHomePage';
import HelpBlock from '../../components/HelpBlock';
import Map from '../../components/Map';
import ModelRow from '../../components/ModelRow';
import NewsBlock from '../../components/NewsBlock';

const Home: React.FC = () => {
  return (
    <>
      <FirstScreenHomePage />
      <ModelRow />
      <Map />
      <HelpBlock />
      <NewsBlock />
    </>
  );
};

export default Home;
