import { configureStore } from '@reduxjs/toolkit';
import { cryptoApiCoingecko } from '../cryptoApi';
import { newsApi } from '../newsApi';
import { fearGreedApi } from '../fearGreedApi';
import { googleNewsApi } from '../googleNewsApi';

const store = configureStore({
  reducer: {
    [cryptoApiCoingecko.reducerPath]: cryptoApiCoingecko.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [fearGreedApi.reducerPath]: fearGreedApi.reducer,
    [googleNewsApi.reducerPath]: googleNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cryptoApiCoingecko.middleware)
      .concat(newsApi.middleware)
      .concat(fearGreedApi.middleware)
      .concat(googleNewsApi.middleware),
});

export default store;
