import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import persistReducer from "redux-persist/es/persistReducer";

import stagesReducer from "./stagesSlice";
import pomodoroReducer from "./pomodoroSlice";
import settingsReducer from "./settingsSlice";
import soundReducer from "./soundSlice";
import tasksReducer from "./tasksSlice";

const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: ["pomodoro", "sound"],
};

const settingsPersistConfig = {
  key: "settings",
  storage: storageSession,
};

const pomodoroPersistConfig = {
  key: "pomodoro",
  storage,
  blacklist: ["status"],
};

const soundPersistConfig = {
  key: "sound",
  storage,
  blacklist: ["playing"],
};

const rootReducer = combineReducers({
  stages: stagesReducer,
  pomodoro: persistReducer(pomodoroPersistConfig, pomodoroReducer),
  settings: persistReducer(settingsPersistConfig, settingsReducer),
  sound: persistReducer(soundPersistConfig, soundReducer),
  tasks: tasksReducer,
});

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
