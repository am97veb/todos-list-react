import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../core/store";
import { getTasksFromLocalStorage } from "./localStorageTasks";
import { Task, TasksState } from "../../features/tasks/types";

const initialState: TasksState = {
  tasks: getTasksFromLocalStorage(),
  hideDone: false,
  loading: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: ({ tasks }, { payload: task }: PayloadAction<Task>) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    allTasksDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },
    toggleDone: ({ tasks }, { payload: taskId }: PayloadAction<Task["id"]>) => {
      const index = tasks.findIndex((task) => task.id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: taskId }: PayloadAction<Task["id"]>) => {
      const index = tasks.findIndex((task) => task.id === taskId);
      tasks.splice(index, 1);
    },
    fetchExampleTasks: (state) => {
      state.loading = true;
    },
    fetchExampleTasksSucces: (state, { payload: exampleTasks }: PayloadAction<Task[]>) => {
      state.loading = false;
      state.tasks = exampleTasks;
    },
    fetchExampleTasksError: (state) => {
      state.loading = false;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleDone,
  allTasksDone,
  removeTask,
  fetchExampleTasks,
  fetchExampleTasksSucces,
  fetchExampleTasksError,
} = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.tasks;
export const selectHideDone = (state: RootState) => state.tasks.hideDone;
export const selectLoading = (state: RootState) => state.tasks.loading;
export const selectAreTasksEmpty = (state: RootState) => selectTasks(state).length === 0;
export const selectSomeTaskDone = (state: RootState) =>
  selectTasks(state).some(({ done }) => done);
export const selectEveryTaskDone = (state: RootState) =>
  selectTasks(state).every(({ done }) => done);

export const selectTaskById = (state: RootState, taskDetailsId: Task["id"]) =>
  selectTasks(state).find(({ id }) => id === taskDetailsId);

export const selectSearchTask = (state: RootState, search: string) => {
  const tasks = selectTasks(state);

  if (!search || search.trim() === "") {
    return tasks;
  }

  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(search.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;