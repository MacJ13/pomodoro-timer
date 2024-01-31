// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Status } from "../types/types";

interface PomodoroState {
  status: Status;
  stageId: string;
  longBreakInterval: number;
  round: number;
  autoStartBreaks: boolean;
  autoStartPomodoros: boolean;
}

const initialState: PomodoroState = {
  stageId: "pomodoro",
  longBreakInterval: 4,
  status: "pause",
  round: 1,
  autoStartBreaks: false,
  autoStartPomodoros: false,
};

const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    // changeStatus(state, action: PayloadAction<StatusType>) {
    //   console.log(state, action);
    // },
    changeStatus(state) {
      state.status = state.status === "start" ? "pause" : "start";
    },
  },
});

export const { changeStatus } = pomodoroSlice.actions;

export const selectPomodoroId = (state: RootState) => state.pomodoro.stageId;
export const selectPomodoro = (state: RootState) => state.pomodoro;

export const getStatus = (state: RootState) => state.pomodoro.status;

export default pomodoroSlice.reducer;
