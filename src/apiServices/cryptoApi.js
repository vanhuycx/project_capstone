import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


//For Coingecko
const cryptoApiHeaderCoingecko = { 
    'x-rapidapi-host': process.env.REACT_APP_COINGECKO_RAPIDAPI_HOST,
    'x-rapidapi-key':  process.env.REACT_APP_RAPIDAPI_API_KEY,
}

const baseUrlCoingecko = 'https://coingecko.p.rapidapi.com';

const createRequest = (url)=> ({url,headers:cryptoApiHeaderCoingecko});

export const cryptoApiCoingecko = createApi({
    reducerPath: 'cryptoApiCoingecko',
    baseQuery: fetchBaseQuery({baseUrl:baseUrlCoingecko}),
    endpoints: (builder)=>({
        // getCryptos: builder.query({
        //     query: ({page,per_page}) => createRequest(`/coins/markets?vs_currency=usd&page=${page}&per_page=${per_page}`),
        // }),

        getGlobalStats: builder.query({
            query: () => createRequest(`/global`),
        }),
    })
})

export const {
    useGetCryptosQuery,
    useGetGlobalStatsQuery,
} = cryptoApiCoingecko;







