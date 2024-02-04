import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { PayloadAction } from "@reduxjs/toolkit";
import { StageId } from "../types/types";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    isOpenSettings: false,
    isOpenTheme: false,
    stageId: "" as StageId,
    stageColor: "",
  },
  reducers: {
    toggleSettings(state) {
      state.isOpenSettings = !state.isOpenSettings;
    },
    toggleTheme(state) {
      state.isOpenTheme = !state.isOpenTheme;
    },
    openTheme(state, action: PayloadAction<{ id: StageId; color: string }>) {
      state.isOpenTheme = true;
      state.stageId = action.payload.id;
      state.stageColor = action.payload.color;
    },
  },
});

export const { toggleSettings, toggleTheme, openTheme } = settingsSlice.actions;

export const selectOpen = (state: RootState) =>
  Boolean(state.settings.isOpenSettings);
export const selectTheme = (state: RootState) =>
  Boolean(state.settings.isOpenTheme);

export default settingsSlice.reducer;
