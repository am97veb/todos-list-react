import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./localStorageTasks";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    loading: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
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
    toggleDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex((task) => task.id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex((task) => task.id === taskId);
      tasks.splice(index, 1);
    },
    fetchExampleTasks: (state) => {
      state.loading = true;
    },
    fetchExampleTasksSucces: (state, {payload:exampleTasks}) => {
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

export const selectTasks = (state) => state.tasks.tasks;
export const selectHideDone = (state) => state.tasks.hideDone;
export const selectLoading = (state) => state.tasks.loading;
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0;
export const selectSomeTaskDone = (state) =>
  selectTasks(state).some(({ done }) => done);
export const selectEveryTaskDone = (state) =>
  selectTasks(state).every(({ done }) => done);

export const selectTaskById = (state, taskDetailsId) =>
  selectTasks(state).find(({ id }) => id === taskDetailsId);

export const selectSearchTask = (state, search) => {
  const tasks = selectTasks(state);

  if (!search || search.trim() === "") {
    return tasks;
  };

  return tasks.filter(({ content }) =>
    content
      .toUpperCase()
      .includes(
        search
          .trim()
          .toUpperCase()
      ));
};

export default tasksSlice.reducer;