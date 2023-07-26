// src/redux/nightModeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isNightMode: false,
};

const nightModeSlice = createSlice({
  name: 'nightMode',
  initialState,
  reducers: {
    toggleNightMode: (state) => {
      state.isNightMode = !state.isNightMode;
    },
  },
});

export const { toggleNightMode } = nightModeSlice.actions;
export default nightModeSlice.reducer;
