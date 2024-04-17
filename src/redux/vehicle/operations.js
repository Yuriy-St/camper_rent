import { createAsyncThunk } from '@reduxjs/toolkit';
import * as mockAPI from 'service/mockAPI';

export const fetchAllCampers = createAsyncThunk(
  'campers/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await mockAPI.fetchAllCampers();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
