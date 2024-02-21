import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Stage, StageId } from "../types/types";

// for create actions
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const stages: Stage[] = [
  { id: "pomodoro", name: "pomodoro", duration: 1500, color: "#c65151" },
  { id: "short", name: "short", duration: 300, color: "#258749" },
  { id: "long", name: "long", duration: 900, color: "#547dbf" },
];

const stagesSlice = createSlice({
  name: "stages",
  initialState: {
    stages,
    previousTheme: stages[0].color,
  },
  reducers: {
    changeStageTime(
      state,
      action: PayloadAction<{ id: StageId; newDuration: number }>
    ) {
      const foundStage = state.stages.find(
        (stage) => stage.id === action.payload.id
      ) as Stage;
      foundStage.duration = action.payload.newDuration;
    },
    updatePreviousTheme(state, action: PayloadAction<StageId>) {
      const foundStage = state.stages.find(
        (stage) => stage.id === action.payload
      ) as Stage;

      state.previousTheme = foundStage.color;
    },
    changeStageColor(
      state,
      action: PayloadAction<{ id: StageId; newColor: string }>
    ) {
      const foundStage = state.stages.find(
        (stage) => stage.id === action.payload.id
      ) as Stage;

      foundStage.color = action.payload.newColor;
    },
  },
});

export const { changeStageTime, changeStageColor, updatePreviousTheme } =
  stagesSlice.actions;

export const selectAllStages = (state: RootState) => state.stages.stages;

export const selectStageById = (state: RootState, id: StageId) =>
  state.stages.stages.find((stage) => stage.id === id);

export const selectStageColor = (state: RootState, id: StageId) => {
  const stage = selectStageById(state, id) as Stage;

  return stage.color;
};

export const getPreviousTheme = (state: RootState) =>
  state.stages.previousTheme;

export default stagesSlice.reducer;
