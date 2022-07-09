import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { news, typeNewsParams } from './types';

export const fetchNews = createAsyncThunk<news, typeNewsParams>(
  'news/fetchNewsStatus',
  async (params) => {
    const { page } = params;
    const { data } = await axios.get<news>(
      `https://62a9f7673b314385543f63b0.mockapi.io/sports-and-leisure?page=${page}&limit=3`,
    );
    return data;
  },
);
