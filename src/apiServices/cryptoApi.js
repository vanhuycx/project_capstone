import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//For Coingecko
const baseUrlCoingecko = 'https://api.coingecko.com/api/v3';

export const cryptoApiCoingecko = createApi({
  reducerPath: 'cryptoApiCoingecko',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrlCoingecko }),
  keepUnusedDataFor: 1,
  endpoints: (builder) => ({
    getGlobalStats: builder.query({
      query: () => ({ url: '/global' }),
    }),
    getTrending: builder.query({
      query: () => ({ url: '/search/trending' }),
    }),
    getCryptos: builder.query({
      query: ({ page, per_page }) => ({
        url: `/coins/markets?vs_currency=usd&page=${page}&per_page=${per_page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`,
      }),
    }),
    getSpecificCrypto: builder.query({
      query: ({ cryptoId }) => ({
        url: `/coins/${cryptoId}?sparkline=true`,
      }),
    }),
    getCryptoHistory: builder.query({
      query: ({ timePeriod, cryptoId }) => ({
        url: `/coins/${cryptoId}/market_chart?days=${timePeriod}&vs_currency=usd`,
      }),
    }),
    getAllCryptosCoingecko: builder.query({
      query: () => ({ url: '/coins/list' }),
    }),

    getExchanges: builder.query({
      query: ({ page, per_page }) => ({
        url: `/exchanges?&page=${page}&per_page=${per_page}`,
      }),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetSpecificCryptoQuery,
  useGetCryptoHistoryQuery,
  useGetAllCryptosCoingeckoQuery,
  useGetGlobalStatsQuery,
  useGetTrendingQuery,
  useGetExchangesQuery
} = cryptoApiCoingecko;
