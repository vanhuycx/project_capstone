import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const baseUrlNews = 'https://news.google.com/rss';

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl:baseUrlNews,
        prepareHeaders:(headers)=> {
            headers.set('Access-Control-Allow-Origin','*')  
            headers.set('Access-Control-Allow-Methods','GET,POST,OPTIONS,DELETE,PUT')  
            headers.set('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token')  
            headers.set('Access-Control-Allow-Credentials',true)
            return headers
            }
        }
    ),
    endpoints: (builder)=>({
        getNews: builder.query({
            query: () => ({url:'/search?q=cryptocurrency'}),
        }),
    }),
})

export const {
    useGetNewsQuery,
} = newsApi;





