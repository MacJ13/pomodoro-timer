import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Stage, StageId } from "../types/types";

// for create actions
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Stage[] = [
  { id: "pomodoro", name: "pomodoro", duration: 1500, color: "#c65151" },
  { id: "short", name: "short", duration: 300, color: "#258749" },
  { id: "long", name: "long", duration: 900, color: "#547dbf" },
];

const stagesSlice = createSlice({
  name: "stages",
  initialState,
  reducers: {
    changeStageTime(
      state,
      action: PayloadAction<{ id: StageId; newDuration: number }>
    ) {
      const foundStage = state.find(
        (stage) => stage.id === action.payload.id
      ) as Stage;
      foundStage.duration = action.payload.newDuration;
    },
    changeStageColor(
      state,
      action: PayloadAction<{ id: StageId; newColor: string }>
    ) {
      const foundStage = state.find(
        (stage) => stage.id === action.payload.id
      ) as Stage;
      foundStage.color = action.payload.newColor;
    },
  },
});

export const { changeStageTime, changeStageColor } = stagesSlice.actions;

export const selectAllStages = (state: RootState) => state.stages;

export const selectStageById = (state: RootState, id: StageId) =>
  state.stages.find((stage) => stage.id === id);

export const selectStageColor = (state: RootState, id: StageId) => {
  const stage = selectStageById(state, id) as Stage;

  return stage.color;
};

export default stagesSlice.reducer;
