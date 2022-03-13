import { configureStore } from "@reduxjs/toolkit";
import {cryptoApiCoingecko } from "../cryptoApi";
import { newsApi } from "../newsApi";

const store = configureStore({
    reducer: {
        [cryptoApiCoingecko.reducerPath]: cryptoApiCoingecko.reducer,
        [newsApi.reducerPath]: newsApi.reducer,
    },
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(cryptoApiCoingecko.middleware).concat(newsApi.middleware)
})

export default store