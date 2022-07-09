import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './asyncActions';
import { newsSliceType, Status, newsItem } from './types';

const initialState: newsSliceType = {
  news: [],
  page: 1,
  pageCount: 1,
  limit: 3,
  status: Status.LOADING,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setPage(state) {
      state.page++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      if (state.page === 1) {
        state.status = Status.LOADING;
        state.news = [];
      }
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      if (state.page === 1) {
        state.news = action.payload.items;
      } else {
        state.news = state.news.concat(action.payload.items);
      }
      state.pageCount = Math.ceil(action.payload.count / state.limit);
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.news = [];
    });
  },
});

export const { setPage } = newsSlice.actions;

export default newsSlice.reducer;
