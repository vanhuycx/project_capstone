import { configureStore } from '@reduxjs/toolkit';
import { cryptoApiCoingecko } from '../cryptoApi';
import { newsApi } from '../newsApi';
import { fearGreedApi } from '../fearGreedApi';

const store = configureStore({
  reducer: {
    [cryptoApiCoingecko.reducerPath]: cryptoApiCoingecko.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [fearGreedApi.reducerPath]: fearGreedApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cryptoApiCoingecko.middleware)
      .concat(newsApi.middleware)
      .concat(fearGreedApi.middleware),
});

export default store;
