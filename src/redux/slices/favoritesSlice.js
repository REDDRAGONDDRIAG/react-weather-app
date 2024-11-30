import { createSlice } from '@reduxjs/toolkit';

// Odczyt ulubionych miejscowości z localStorage przy starcie aplikacji
const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: initialFavorites,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const cityName = action.payload;
      if (state.favorites.includes(cityName)) {
        state.favorites = state.favorites.filter((city) => city !== cityName);
      } else {
        state.favorites.push(cityName);
      }
      // Aktualizacja localStorage po każdej zmianie
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
