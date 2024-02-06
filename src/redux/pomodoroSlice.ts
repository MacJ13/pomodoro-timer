import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { StageId, Status } from "../types/types";

// interface PomodoroStateKeys {
//   [key: string]: string | number | boolean;
// }

interface PomodoroState {
  [key: string]: string | number | boolean;
  status: Status;
  stageId: StageId;
  longBreakInterval: number;
  round: number;
  autoStartBreaks: boolean;
  autoStartPomodoros: boolean;
}

const initialState: PomodoroState = {
  stageId: "pomodoro",
  longBreakInterval: 4,
  status: "idle",
  round: 1,
  autoStartBreaks: false,
  autoStartPomodoros: false,
};

const wait = (s: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, s * 1000);
  });
};

export const startAutoCountdown = createAsyncThunk(
  "pomodoro/startAutoCountdown",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (_) => {
    await wait(1.5);
    return true;
  },
  {
    condition: (
      _,
      { getState }: { getState: () => RootState; extra: unknown }
    ) => {
      const { pomodoro } = getState();

      if (
        (pomodoro.stageId === "pomodoro" && !pomodoro.autoStartPomodoros) ||
        (pomodoro.stageId !== "pomodoro" && !pomodoro.autoStartBreaks) ||
        pomodoro.status === "idle"
      )
        return false;
    },
  }
);

const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeStatus(state) {
      state.status = state.status === "start" ? "pause" : "start";
    },
    changeStageId(state, action: PayloadAction<StageId>) {
      if (state.stageId === action.payload) {
        return;
      }

      state.stageId = action.payload;
      state.status = "pause";

      if (action.payload === "pomodoro" && state.round > 1) {
        state.round += 0.5;
      } else if (action.payload !== "pomodoro" && state.round > 1.5) {
        state.round -= 0.5;
      }

      if (state.playingAlarm) {
        state.playingAlarm = false;
      }
    },
    changeInterval(state, action: PayloadAction<number>) {
      state.longBreakInterval = action.payload;
    },
    toggleAutoStart(
      state: PomodoroState,
      action: PayloadAction<{ name: string; active: boolean }>
    ) {
      state[action.payload.name as keyof PomodoroState] = action.payload.active;
    },
    changeNextStage(state) {
      if (state.stageId === "pomodoro") {
        state.stageId =
          state.round % state.longBreakInterval === 0 ? "long" : "short";
      } else {
        state.stageId = "pomodoro";
      }
      state.round += 0.5;
      state.status = "pause";
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(startAutoCountdown.pending, (state) => {
      //   state.status = "pause";
      // })
      .addCase(startAutoCountdown.fulfilled, (state) => {
        state.status = "start";
      });
  },
});

export const {
  changeStatus,
  changeStageId,
  changeNextStage,
  toggleAutoStart,
  changeInterval,
} = pomodoroSlice.actions;

export const selectPomodoroId = (state: RootState) => state.pomodoro.stageId;
export const selectPomodoro = (state: RootState) => state.pomodoro;
export const getStatus = (state: RootState) => state.pomodoro.status;
export const getRound = (state: RootState) => state.pomodoro.round;

export default pomodoroSlice.reducer;
