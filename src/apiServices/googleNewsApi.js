import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://van-google-news.herokuapp.com/';

export const googleNewsApi = createApi({
  reducerPath: 'googleNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getGoogleNews: builder.query({
      query: ({ searchTerm,timeRange }) => ({
        url: `/search?q=${searchTerm}&time_range=${timeRange}`,
      }),
    }),
  }),
}); 

export const { useGetGoogleNewsQuery } = googleNewsApi;
