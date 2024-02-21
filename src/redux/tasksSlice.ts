import {
  createSlice,
  nanoid,
  PayloadAction,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { Task } from "src/types/types";
import { RootState } from "./store";

// type TasksState = {
//   tasks: Task[];
//   isFilteredActive: boolean;
//   activeTaskId: string;
// };

type UpdatedTask = {
  id: string;
  title: string;
  notes: string;
  roundsTotal: number;
  roundsComplete: number;
};

// const initialState: TasksState = {
//   tasks: [],
//   activeTaskId: "",
//   isFilteredActive: false,
// };

const tasksAdapter = createEntityAdapter({
  selectId: (task: Task) => task.id,
  sortComparer: (a, b) => a.createdAt.localeCompare(b.createdAt),
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
        // if (!state.activeTaskId && state.tasks.length === 0) {
        //   action.payload.active = true;
        //   state.activeTaskId = action.payload.id;
        // }

        tasksAdapter.addOne(state, action.payload);
        // state.tasks.push(action.payload);
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

      // console.log(updatedTask)

      // existingTask.title = title;
      // existingTask.notes = notes;
      // existingTask.roundsTotal = roundsTotal;
      // if (roundsComplete) existingTask.roundsComplete = roundsComplete;

      tasksAdapter.upsertOne(state, updatedTask);
    },
    deleteTask(state, action: PayloadAction<string>) {
      const id = action.payload;

      // state.tasks = state.tasks.filter((task) => task.id !== id);

      // if (id === state.activeTaskId && state.tasks.length) {
      //   state.tasks[0].active = true;
      //   state.activeTaskId = state.tasks[0].id;
      // }

      // if (!state.tasks.length) {
      //   state.activeTaskId = "";
      // }

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

      // const task = state.tasks.find((task) => task.id === id);
      // if (!task) return;

      // task.done = !task.done;

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
      // tasksAdapter.removeMany(state, state.ids);

      // if (!state.tasks.length) return;
      // state.tasks.length = 0;
      // state.isFilteredActive = false;
      // state.activeTaskId = "";
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

      // if (!state.tasks.length) return;

      // state.isFilteredActive = false;

      // const unfinishedTasks = state.tasks.filter((task) => !task.done);

      // const activeInTasks = unfinishedTasks.some((task) => task.active);

      // if (!unfinishedTasks.length) state.activeTaskId = "";

      // if (!activeInTasks && unfinishedTasks.length) {
      //   unfinishedTasks[0].active = true;
      //   state.activeTaskId = unfinishedTasks[0].id;
      // }

      // // if (unfinishedTasks.length === state.tasks.length) return;

      // state.tasks = unfinishedTasks;

      // state.isFilteredActive = false;
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

      // const currentActiveTask = state.entities[]

      // state.tasks = state.tasks.map((task) => {
      //   task.active = action.payload === task.id ? true : false;

      //   return task;
      // });

      // state.activeTaskId = action.payload;
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
} = tasksSlice.actions;

// export const selectAllTasks = (state: RootState) => state.tasks.tasks;

// export const selectTaskById = (state: RootState, id: string) =>
//   state.tasks.tasks.find((task) => task.id === id);

// export const getFilteredActive = (state: RootState) =>
//   state.tasks.isFilteredActive;

// export const getActiveTaskId = (state: RootState) => state.tasks.activeTaskId;

// export const getActiveTask = (state: RootState) => {
//   return state.tasks.tasks.find((task) => state.tasks.activeTaskId === task.id);
// };

// export const selectAllTasks = (state: RootState) => state.tasks.allIds.

export const {
  selectAll: selectAllTasks,
  selectById: selectTaskById,
  selectIds: selectTaskIds,
} = tasksAdapter.getSelectors((state: RootState) => state.tasks);

export const getFilteredActive = (state: RootState) =>
  state.tasks.isFilteredActive;

export const getActiveTaskId = (state: RootState) => state.tasks.activeTaskId;

export default tasksSlice.reducer;
