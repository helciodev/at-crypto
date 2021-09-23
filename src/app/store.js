import { configureStore } from '@reduxjs/toolkit';
import { coinRankApi } from '../services/servicesApi';

export default configureStore({
  reducer: {
    [coinRankApi.reducerPath] : coinRankApi.reducer
  }
})