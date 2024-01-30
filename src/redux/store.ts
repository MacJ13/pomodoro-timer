import { configureStore } from "@reduxjs/toolkit";
import stagesReducer from "./stagesSlice";
import pomodoroReducer from "./pomodoroSlice";

export const store = configureStore({
  reducer: {
    stages: stagesReducer,
    pomodoro: pomodoroReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
