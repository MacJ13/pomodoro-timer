import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "src/types/types";
import { RootState } from "./store";

type TasksState = {
  tasks: Task[];
  isFilteredActive: boolean;
  activeTaskId: string;
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
  activeTaskId: "",
  isFilteredActive: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action: PayloadAction<Task>) {
        if (!state.activeTaskId && state.tasks.length === 0) {
          action.payload.active = true;
          state.activeTaskId = action.payload.id;
        }
        state.tasks.push(action.payload);
      },
      prepare(title: string, roundsTotal: number, notes: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            notes,
            roundsTotal,
            roundsComplete: 0,
            done: false,
            active: false,
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
    deleteTask(state, action: PayloadAction<string>) {
      const id = action.payload;

      state.tasks = state.tasks.filter((task) => task.id !== id);

      if (id === state.activeTaskId && state.tasks.length) {
        state.tasks[0].active = true;
        state.activeTaskId = state.tasks[0].id;
      }

      if (!state.tasks.length) {
        state.activeTaskId = "";
      }
    },
    markCompleteTask(state, action: PayloadAction<string>) {
      const id = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (!task) return;

      task.done = !task.done;
    },
    toggleFilteredTasks(state) {
      if (!state.tasks.length) return;
      state.isFilteredActive = !state.isFilteredActive;
    },

    clearAllTasks(state) {
      if (!state.tasks.length) return;
      state.tasks.length = 0;
      state.isFilteredActive = false;
    },

    clearFinishedTasks(state) {
      if (!state.tasks.length) return;
      state.isFilteredActive = false;

      const unfinishedTasks = state.tasks.filter((task) => !task.done);

      if (unfinishedTasks.length === state.tasks.length) return;

      state.tasks = unfinishedTasks;
      state.isFilteredActive = false;
    },
  },
});

export const {
  addTask,
  markCompleteTask,
  updateTask,
  deleteTask,
  clearAllTasks,
  clearFinishedTasks,
  toggleFilteredTasks,
} = tasksSlice.actions;

export const selectAllTasks = (state: RootState) => state.tasks.tasks;

export const selectTaskById = (state: RootState, id: string) =>
  state.tasks.tasks.find((task) => task.id === id);

export const getFilteredActive = (state: RootState) =>
  state.tasks.isFilteredActive;

export const getActiveTaskId = (state: RootState) => {
  state.tasks.activeTaskId;
};

export default tasksSlice.reducer;
