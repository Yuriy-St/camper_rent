import { useSelector } from 'react-redux';
import { selectCampers } from '../vehicle/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectFavorites = state => state.favorites.items;

// export const selectFavorites = createSelector(
//   [selectCampers, selectFavoriteIds],
//   (campers, favoriteIds) => {
//     const favorites = campers.reduce((acc, camper) => {
//       const isFavorite = favoriteIds.some(id => id === camper.id);
//       if (isFavorite) {
//         acc.push(camper);
//       }
//       return acc;
// 		}, []);
// 		return favorites;
//   }
// );
