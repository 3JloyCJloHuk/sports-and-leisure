import React from 'react';
import { useSelector } from 'react-redux';
import {
  FirstScreenHomePage,
  ModelRow,
  Map,
  PartnersBlock,
  HelpBlock,
  NewsBlock,
} from '../../components/PageHomeComponents/';
import PopUpBlock from '../../components/PopUpBlock';
import { fetchNews } from '../../redux/news/asyncActions';
import { setPage } from '../../redux/news/slice';
import { RootState, useAppDispatch } from '../../redux/store';

const Home: React.FC = () => {
  const [popUp, setPopUp] = React.useState<boolean>(false);
  const { news, page, pageCount, status } = useSelector((state: RootState) => state.news);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchNews({ page }));
  }, [page]);

  const onClickAddPage = () => {
    dispatch(setPage());
    console.log(setPage());
  };

  if (popUp) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }

  return (
    <>
      <FirstScreenHomePage setPopUp={setPopUp} />
      <ModelRow />
      <Map />
      <PartnersBlock />
      <HelpBlock setPopUp={setPopUp} />
      <NewsBlock
        news={news}
        page={page}
        pageCount={pageCount}
        onClickAddPage={onClickAddPage}
        status={status}
      />
      {popUp && <PopUpBlock setPopUp={setPopUp} />}
    </>
  );
};

export default Home;
