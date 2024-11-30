import { createSlice } from '@reduxjs/toolkit';

const initialState = { unit: 'C' };

const temperatureSlice = createSlice({
  name: 'temperature',
  initialState,
  reducers: {
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
  },
});

export const { setUnit } = temperatureSlice.actions;
export default temperatureSlice.reducer;
