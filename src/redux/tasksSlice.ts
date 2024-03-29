import {
  createSlice,
  nanoid,
  PayloadAction,
  createEntityAdapter,
} from "@reduxjs/toolkit";
// import { Task } from "src/utils/types/types";
import { RootState } from "./store";
import { Task, UpdatedTask } from "src/utils/interfaces/interfaces";

const tasksAdapter = createEntityAdapter({
  selectId: (task: Task) => task.id,
  // sortComparer: (a, b) => a.createdAt.localeCompare(b.createdAt),
});

const initialState = tasksAdapter.getInitialState({
  activeTaskId: "",
  isFilteredActive: false,
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action: PayloadAction<Task>) {
        if (!state.activeTaskId && state.ids.length === 0) {
          action.payload.active = true;
          state.activeTaskId = action.payload.id;
        }

        tasksAdapter.addOne(state, action.payload);
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
            createdAt: new Date().toISOString(),
          },
        };
      },
    },
    updateTask(state, action: PayloadAction<UpdatedTask>) {
      const { id } = action.payload;

      const existingTask = state.entities[id];

      if (!existingTask) return;

      const updatedTask = {
        ...existingTask,
        ...action.payload,
      };

      tasksAdapter.upsertOne(state, updatedTask);
    },
    deleteTask(state, action: PayloadAction<string>) {
      const id = action.payload;

      tasksAdapter.removeOne(state, id);

      if (!state.ids.length) {
        state.activeTaskId = "";
      } else if (id === state.activeTaskId && state.ids.length) {
        const nextAvailableId = state.ids[0];
        const nextTask = state.entities[nextAvailableId];
        state.activeTaskId = nextAvailableId;
        tasksAdapter.upsertOne(state, { ...nextTask, active: true });
      }
    },
    markCompleteTask(state, action: PayloadAction<string>) {
      const id = action.payload;

      const task = state.entities[id];
      if (!task) return;

      tasksAdapter.upsertOne(state, { ...task, done: !task.done });
    },
    toggleFilteredTasks(state) {
      if (!state.ids.length) return;
      state.isFilteredActive = !state.isFilteredActive;
    },

    clearAllTasks(state) {
      if (!state.ids.length) return;

      state.activeTaskId = "";

      tasksAdapter.removeAll(state);
    },

    clearFinishedTasks(state) {
      if (!state.ids.length) return;

      state.isFilteredActive = false;

      const doneIds = state.ids.filter((id) => {
        const task = state.entities[id];

        return task.done;
      });

      const activeTaskDone = doneIds.includes(state.activeTaskId);

      tasksAdapter.removeMany(state, doneIds);

      if (!state.ids.length) {
        state.activeTaskId = "";
      } else if (activeTaskDone) {
        const nextId = state.ids[0];
        const nextTask = state.entities[nextId];
        state.activeTaskId = nextTask.id;

        tasksAdapter.upsertOne(state, { ...nextTask, active: true });
      }
    },
    changeActiveTask(state, action: PayloadAction<string>) {
      const previousActiveId = state.activeTaskId;

      if (previousActiveId === action.payload || state.ids.length === 1) return;

      state.activeTaskId = action.payload;
      // const activeId = state.activeTaskId;
      // const markedId = action.payload;

      const previousTask = {
        ...state.entities[previousActiveId],
        active: false,
      };
      const currentTask = {
        ...state.entities[state.activeTaskId],
        active: true,
      };

      tasksAdapter.upsertMany(state, [previousTask, currentTask]);
    },
    incrementActiveTask(state) {
      if (!state.activeTaskId) return;
      const activeTask = state.entities[state.activeTaskId];

      if (!activeTask) return;

      const rounds = activeTask.roundsComplete + 1;
      tasksAdapter.upsertOne(state, {
        ...activeTask,
        roundsComplete: rounds,
      });
    },
    reorderTasks(
      state,
      action: PayloadAction<{ startIndex: number; endIndex: number }>
    ) {
      const { startIndex, endIndex } = action.payload;

      const result = Array.from(state.ids);

      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);

      state.ids = result;
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
  changeActiveTask,
  incrementActiveTask,
  reorderTasks,
} = tasksSlice.actions;

export const {
  selectAll: selectAllTasks,
  selectById: selectTaskById,
  selectIds: selectTaskIds,
  selectTotal: selectTotalTasks,
} = tasksAdapter.getSelectors((state: RootState) => state.tasks);

export const getFilteredActive = (state: RootState) =>
  state.tasks.isFilteredActive;

export const getActiveTaskId = (state: RootState) => state.tasks.activeTaskId;

export default tasksSlice.reducer;
