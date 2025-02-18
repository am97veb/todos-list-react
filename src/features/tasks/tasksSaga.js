import { call, put, delay, takeEvery, select } from "redux-saga/effects"
import { fetchExampleTasks, fetchExampleTasksError, fetchExampleTasksSucces } from "./tasksSlice";
import { fetchApiData } from "./fetchApiData";
import { saveTasksToLocalStorage } from "./localStorageTasks";
import { selectTasks } from "./tasksSlice.js";

function* fetchExampleTasksHandler() {
    try {
        yield delay(3000);
        const exampleTasks = yield call(fetchApiData);
        yield put(fetchExampleTasksSucces(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError())
        yield call(alert, "Niestety nie udało się pobrać zadań. Przeładuj stronę lub spróbuj później.");
    };
};

// function* tasksFromLocaleStorageHandler() {
//     const tasks = yield select(selectTasks);
//     yield call(saveTasksToLocalStorage, tasks);
// };

export function* watchFetchExampleTasks() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
    // yield takeEvery("*", tasksFromLocaleStorageHandler);
};