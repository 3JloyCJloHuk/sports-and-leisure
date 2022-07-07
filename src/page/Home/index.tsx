import React from 'react';
import FirstScreenHomePage from '../../components/FirstScreenHomePage';
import HelpBlock from '../../components/HelpBlock';
import Map from '../../components/Map';
import ModelRow from '../../components/ModelRow';
import NewsBlock from '../../components/NewsBlock';
import PartnersBlock from '../../components/PartnersBlock';

const Home: React.FC = () => {
  return (
    <>
      <FirstScreenHomePage />
      <ModelRow />
      <Map />
      <PartnersBlock />
      <HelpBlock />
      <NewsBlock />
    </>
  );
};

export default Home;
