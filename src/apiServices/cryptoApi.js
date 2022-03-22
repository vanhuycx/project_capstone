import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//For Coingecko
const baseUrlCoingecko = "https://api.coingecko.com/api/v3";

export const cryptoApiCoingecko = createApi({
  reducerPath: "cryptoApiCoingecko",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrlCoingecko }),
  endpoints: (builder) => ({
    getGlobalStats: builder.query({
      query: () => ({ url: "/global" }),
    }),
    getTrending: builder.query({
      query: () => ({ url: "/search/trending" }),
    }),
    getCryptos: builder.query({
      query: ({ page, per_page }) => ({
        url: `/coins/markets?vs_currency=usd&page=${page}&per_page=${per_page}`,
      }),
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
  useGetGlobalStatsQuery,
  useGetTrendingQuery,
  useGetExchangesQuery,
} = cryptoApiCoingecko;
