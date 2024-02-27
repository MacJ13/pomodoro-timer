import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { PayloadAction } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    isOpenSettings: false,
    isOpenTheme: false,
    openCreatingTask: false,
    openUpdatingTask: false,
    openDeletingTask: false,
    stageId: "",
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
    openTheme(state, action: PayloadAction<{ id: string; color: string }>) {
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

const getOpenCreating = (state: RootState) => state.settings.openCreatingTask;
const getOpenDeleting = (state: RootState) => state.settings.openDeletingTask;
const getOpenUpdating = (state: RootState) => state.settings.openUpdatingTask;

export const getOpeningTasks = createSelector(
  [getOpenCreating, getOpenDeleting, getOpenUpdating],
  (openCreating: boolean, openDeleting: boolean, openUpdating: boolean) => {
    return { openCreating, openDeleting, openUpdating };
  }
);

// export const getOpeningTasks = (state: RootState) => ({
//   openUpdating: state.settings.openUpdatingTask,
//   openCreating: state.settings.openCreatingTask,
//   openDeleting: state.settings.openDeletingTask,
// });

export default settingsSlice.reducer;
