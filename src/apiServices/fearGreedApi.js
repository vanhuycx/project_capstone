import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.alternative.me/fng/';

export const fearGreedApi = createApi({
  reducerPath: 'fearGreedApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getFearGreedIndex: builder.query({
      query: ({ limit }) => ({
        url: `?limit=${limit}`,
      }),
    }),
  }),
});

export const { useGetFearGreedIndexQuery } = fearGreedApi;
