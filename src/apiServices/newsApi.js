import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const baseUrlNews = 'https://news.google.com/rss';

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl:baseUrlNews}),
    endpoints: (builder)=>({
        getNews: builder.query({
            query: () => ({url:'/search?q=cryptocurrency'}),
        }),
    }),
    prepareHeaders: (headers) => {
    headers.set('Access-Control-Allow-Origin', '*')
    return headers
    }
})

export const {
    useGetNewsQuery,
} = newsApi;





