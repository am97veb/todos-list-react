import { call, put, delay, takeEvery, select } from "redux-saga/effects"
import { fetchExampleTasks, fetchStatusChange, podmianaZadan as switchTasks } from "./tasksSlice";
import { fetchApiData } from "./fetchApiData";
import { saveTasksToLocalStorage} from "./localStorageTasks";
import {selectTasks} from "./tasksSlice.js";




function* fetchExampleTasksHandler() {
    try {
        yield put(fetchStatusChange());
        yield delay(3000);
        const exampleTasks = yield call(fetchApiData);
        yield put(switchTasks(exampleTasks));
        yield put(fetchStatusChange());
    } catch (error) {
        yield call(alert, "Niestety nie udało się pobrać zadań. Przeładuj stronę lub spróbuj później");
        yield call(console.error("Niestety nie udało się pobrać zadań. Przeładuj stronę lub spróbuj później", error));

    };
};

function* tasksFromLocaleStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksToLocalStorage, tasks);
}

export function* watchFetchExampleTasks() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", tasksFromLocaleStorageHandler);
};