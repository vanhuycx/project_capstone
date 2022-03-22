import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//For free news api

const headers = {
  'x-rapidapi-host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_API_KEY,
};

const baseUrl = 'https://free-news.p.rapidapi.com/v1/';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ page_size }) => ({
        url: `/search?q=crypto&page_size=${page_size}`,
        headers: headers,
      }),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
