import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import news from './news/slice';

export const store = configureStore({
  reducer: {
    news,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
