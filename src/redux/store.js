// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import mapReducer from './mapSlice';
import nightModeReducer from './nightModeSlice'; // Import the night mode reducer

const store = configureStore({
  reducer: {
    map: mapReducer,
    nightMode: nightModeReducer, // Add the night mode reducer to the store
    // Add other reducers if needed
  },
});

export default store;
