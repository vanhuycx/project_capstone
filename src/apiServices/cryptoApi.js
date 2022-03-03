import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


//For Coingecko

const baseUrlCoingecko = 'https://api.coingecko.com/api/v3';

const headers = {
    'key':'dawda',
    'host':'dawawd'
}

export const cryptoApiCoingecko = createApi({
    reducerPath: 'cryptoApiCoingecko',
    baseQuery: fetchBaseQuery({baseUrl:baseUrlCoingecko,prepareHeaders:(headers)=> {
        headers.set('host','dhawudawd')
        headers.set('key','dhawudawd')
        return headers

    }}),
    endpoints: (builder)=>({
        getGlobalStats: builder.query({
            query: () => ({url:'/global'}),
        }),
        getTrending: builder.query({
            query: () => ({url:'/search/trending',headers}),
        }),
    })
})

export const {
    useGetCryptosQuery,
    useGetGlobalStatsQuery,
    useGetTrendingQuery,
} = cryptoApiCoingecko;





           // getCryptos: builder.query({
        //     query: ({page,per_page}) => createRequest(`/coins/markets?vs_currency=usd&page=${page}&per_page=${per_page}`),
        // }),




