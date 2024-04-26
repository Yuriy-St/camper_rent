import { createAsyncThunk } from '@reduxjs/toolkit';
import * as mockAPI from 'src/service/mockAPI';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (options, thunkAPI) => {
    try {
      const data = await mockAPI.fetchCampers(options);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
