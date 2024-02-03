import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleSettings(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSettings } = settingsSlice.actions;

export const selectOpen = (state: RootState) => Boolean(state.settings.isOpen);

export default settingsSlice.reducer;
