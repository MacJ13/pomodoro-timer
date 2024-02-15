import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "src/types/types";
import { RootState } from "./store";

type TasksState = {
  tasks: Task[];
};

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action: PayloadAction<Task>) {
        state.tasks.push(action.payload);
      },
      prepare(title, roundsTotal, notes) {
        return {
          payload: {
            id: nanoid(),
            title,
            notes,
            roundsTotal,
            roundsComplete: 0,
            done: false,
          },
        };
      },
    },
    markCompleteTask(state, action: PayloadAction<string>) {
      const id = action.payload;
      const task = state.tasks.find((task) => task.id === id) as Task;

      task.done = !task.done;
    },
  },
});

export const { addTask, markCompleteTask } = tasksSlice.actions;

export const selectAllTasks = (state: RootState) => state.tasks.tasks;

export default tasksSlice.reducer;
