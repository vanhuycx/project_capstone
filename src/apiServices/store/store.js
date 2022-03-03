import { configureStore } from "@reduxjs/toolkit";
import {cryptoApiCoingecko } from "../cryptoApi";


export default configureStore({
    reducer: {
        [cryptoApiCoingecko.reducerPath]: cryptoApiCoingecko.reducer,
    },
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(cryptoApiCoingecko.middleware).concat(newsApi.middleware)
})