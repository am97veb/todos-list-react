import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/tasksSlice";
import { watchFetchExampleTasks } from "../features/tasks/tasksSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchExampleTasks);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;