import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [
            { content: "zrobić obiad", done: true, id: 1 },
            { content: "umyć samochód", done: false, id: 2 },
        ],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload);
            tasks[index].done = !tasks[index].done;
        },
        allTasksDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true
            };
        },
        removeTask: ({ tasks }, action) => {
            const index = tasks.findIndex(task => task.id === action.payload);
            tasks.splice(tasks[index], 1);
        },
    },
});

export const { addTask, toggleHideDone, toggleDone, allTasksDone, removeTask } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;