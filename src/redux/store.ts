import { configureStore } from "@reduxjs/toolkit";
import stagesReducer from "./stagesSlice";
import pomodoroReducer from "./pomodoroSlice";
import settingsReducer from "./settingsSlice";
import soundReducer from "./soundSlice";
import tasksReducer from "./tasksSlice";

export const store = configureStore({
  reducer: {
    stages: stagesReducer,
    pomodoro: pomodoroReducer,
    settings: settingsReducer,
    sound: soundReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
