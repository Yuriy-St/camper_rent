import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCampers } from './operations';
import { STATUS } from '../constants';

const handlePending = state => {
  state.status = STATUS.pending;
};

const handleRejected = (state, action) => {
  state.status = STATUS.failed;
  state.error = action.payload;
};

const initialState = {
  items: [],
  status: STATUS.idle,
  error: null
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllCampers.pending, handlePending)
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.status = STATUS.complete;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchAllCampers.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
