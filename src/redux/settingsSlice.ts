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
    openUpdatingTask: false,
    openDeletingTask: false,
    stageId: "" as StageId,
    taskId: "",
    stageColor: "",
  },
  reducers: {
    toggleDeletingTask(state, action: PayloadAction<string | undefined>) {
      state.openDeletingTask = !state.openDeletingTask;
      if (action.payload) {
        state.taskId = action.payload;
      } else {
        state.taskId = "";
      }
    },

    toggleUpdatingTask(state, action: PayloadAction<string | undefined>) {
      state.openUpdatingTask = !state.openUpdatingTask;
      if (action.payload) {
        state.taskId = action.payload;
      } else {
        state.taskId = "";
      }
    },
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

export const {
  toggleSettings,
  toggleCreatingTask,
  toggleUpdatingTask,
  toggleDeletingTask,
  toggleTheme,
  openTheme,
} = settingsSlice.actions;

export const selectOpen = (state: RootState) =>
  Boolean(state.settings.isOpenSettings);
export const selectTheme = (state: RootState) =>
  Boolean(state.settings.isOpenTheme);

export const getTaskId = (state: RootState) => state.settings.taskId;

export const getStageId = (state: RootState) => state.settings.stageId;

export const getStageColor = (state: RootState) => state.settings.stageColor;

export const getOpeningTasks = (state: RootState) => ({
  openUpdating: state.settings.openUpdatingTask,
  openCreating: state.settings.openCreatingTask,
  openDeleting: state.settings.openDeletingTask,
});

export default settingsSlice.reducer;
