import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './vehicle/slice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});
