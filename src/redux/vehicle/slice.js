import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';
import { STATUS } from '../constants';

const handlePending = state => {
  (state.status = STATUS.pending), (state.error = null);
};

const handleFulfilled = (state, { payload }) => {
  state.status = STATUS.complete;
  state.error = null;
  state.items.push(...payload);
  if (payload.length < state.limit) {
    state.nextPage = null;
  } else {
    state.nextPage = state.nextPage + 1;
  }
};

const handleRejected = (state, action) => {
  state.status = STATUS.failed;
  state.error = action.error;
};

const initialState = {
  items: [],
  nextPage: 1,
  limit: 4,
  status: STATUS.idle,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    resetCampers: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, handleFulfilled)
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const { resetCampers } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
