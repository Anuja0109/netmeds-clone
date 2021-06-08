import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const store = () =>
  configureStore({
    reducer,
    ...getDefaultMiddleware(),
  });

export default store;
