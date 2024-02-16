import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "src/types/types";
import { RootState } from "./store";

type TasksState = {
  tasks: Task[];
};

type UpdatedTask = {
  id: string;
  title: string;
  notes: string;
  round: number;
  completeRound?: number;
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
    updateTask(state, action: PayloadAction<UpdatedTask>) {
      const { id, title, notes, round, completeRound } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (!task) return;

      task.title = title;
      task.notes = notes;
      task.roundsTotal = round;
      if (completeRound) task.roundsComplete = completeRound;
    },
    markCompleteTask(state, action: PayloadAction<string>) {
      const id = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (!task) return;

      task.done = !task.done;
    },
  },
});

export const { addTask, markCompleteTask, updateTask } = tasksSlice.actions;

export const selectAllTasks = (state: RootState) => state.tasks.tasks;

export const selectTaskById = (state: RootState, id: string) =>
  state.tasks.tasks.find((task) => task.id === id);

export default tasksSlice.reducer;
