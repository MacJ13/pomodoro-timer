import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { PayloadAction } from "@reduxjs/toolkit";
import { StageId } from "../types/types";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    isOpenSettings: false,
    isOpenTheme: false,
    openCreatingTask: false,
    stageId: "" as StageId,
    stageColor: "",
  },
  reducers: {
    toggleCreatingTask(state) {
      state.openCreatingTask = !state.openCreatingTask;
    },
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

export const { toggleSettings, toggleCreatingTask, toggleTheme, openTheme } =
  settingsSlice.actions;

export const selectOpen = (state: RootState) =>
  Boolean(state.settings.isOpenSettings);
export const selectTheme = (state: RootState) =>
  Boolean(state.settings.isOpenTheme);

export const selectCreatingTask = (state: RootState) =>
  Boolean(state.settings.openCreatingTask);

export const getStageId = (state: RootState) => state.settings.stageId;

export const getStageColor = (state: RootState) => state.settings.stageColor;

export default settingsSlice.reducer;
