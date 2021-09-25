import { configureStore } from '@reduxjs/toolkit';
import { coinRankApi } from '../services/servicesApi';
import { newsApi } from '../services/newsApi';

export default configureStore({
  reducer: {
    [coinRankApi.reducerPath] : coinRankApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  }
})