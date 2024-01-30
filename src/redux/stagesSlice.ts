import { createSlice } from "@reduxjs/toolkit";

// for create actions
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Stage {
  id: string;
  name: string;
  duration: number;
  color: string;
}

const initialState: Stage[] = [
  { id: "pomodoro", name: "pomodoro", duration: 1500, color: "#eb3838" },
  { id: "short", name: "short", duration: 300, color: "#16a34a" },
  { id: "long", name: "long", duration: 900, color: "#0284c7" },
];

const stagesSlice = createSlice({
  name: "stages",
  initialState,
  reducers: {},
});

export default stagesSlice.reducer;
