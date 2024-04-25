import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

// remember that toolkit uses Immer inside reducers so we can 'mutate' state directly
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, { payload }) {
      state.items.push(payload);
    },
    removeFromFavorites(state, { payload }) {
			const newItems = state.items.filter(item => item.id !== payload.id);
			return {
				items: newItems,
			}
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
