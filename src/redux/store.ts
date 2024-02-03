import { configureStore } from "@reduxjs/toolkit";
import stagesReducer from "./stagesSlice";
import pomodoroReducer from "./pomodoroSlice";
import settingsReducer from "./settingsSlice";

export const store = configureStore({
  reducer: {
    stages: stagesReducer,
    pomodoro: pomodoroReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
