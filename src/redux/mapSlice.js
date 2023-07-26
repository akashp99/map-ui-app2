// src/redux/mapSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedRegion: '',
  regionInfo: null,
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setRegionInfo: (state, action) => {
      state.selectedRegion = action.payload.selectedRegion;
      state.regionInfo = action.payload.regionInfo;
    },
  },
});

export const { setRegionInfo } = mapSlice.actions; // Export the setRegionInfo action creator
export default mapSlice.reducer;
