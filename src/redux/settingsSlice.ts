import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    isOpenSettings: false,
    isOpenTheme: false,
  },
  reducers: {
    toggleSettings(state) {
      state.isOpenSettings = !state.isOpenSettings;
    },
    toggleTheme(state) {
      state.isOpenTheme = !state.isOpenTheme;
    },
  },
});

export const { toggleSettings, toggleTheme } = settingsSlice.actions;

export const selectOpen = (state: RootState) =>
  Boolean(state.settings.isOpenSettings);
export const selectTheme = (state: RootState) =>
  Boolean(state.settings.isOpenTheme);

export default settingsSlice.reducer;
