export type newsItem = {
  id: string;
  img: string;
  title: string;
  date: string;
  typeTag: string;
};

export type news = {
  items: newsItem[];
  count: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface newsSliceType {
  news: newsItem[];
  page: number;
  pageCount: number;
  limit: number;
  status: Status;
}

export type typeNewsParams = {
  page: number;
};
