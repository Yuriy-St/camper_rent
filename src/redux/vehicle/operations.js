import { createAsyncThunk } from '@reduxjs/toolkit';
import * as mockAPI from 'src/service/mockAPI';

export const fetchAllCampers = createAsyncThunk(
  'campers/fetchAll',
  async (options, thunkAPI) => {
    try {
      const data = await mockAPI.fetchAllCampers(options);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
