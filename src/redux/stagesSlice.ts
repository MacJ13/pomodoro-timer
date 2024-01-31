import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Stage } from "../types/types";

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
  reducers: {},
});

export const selectAllStages = (state: RootState) => state.stages;

export const selectStageById = (state: RootState, id: string | number) =>
  state.stages.find((stage) => stage.id === id);

export default stagesSlice.reducer;
