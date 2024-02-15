import { createSlice } from "@reduxjs/toolkit";
import { Task } from "src/types/types";

type TasksState = {
  tasks: Task[];
};

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export default tasksSlice.reducer;
