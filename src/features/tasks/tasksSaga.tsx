import { call, put, delay, takeEvery, select } from "redux-saga/effects"
import { fetchExampleTasks, fetchExampleTasksError, fetchExampleTasksSucces, selectTasks } from "./tasksSlice";
import { fetchApiData } from "./fetchApiData";
import { saveTasksToLocalStorage } from "./localStorageTasks";
import { Task } from "./types";
import { SagaIterator } from "redux-saga";

function* fetchExampleTasksHandler(): SagaIterator {
    try {
        yield delay(3000);
        const exampleTasks: Task[] = yield call(fetchApiData);
        yield put(fetchExampleTasksSucces(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError())
        yield call(alert, "Niestety nie udało się pobrać zadań. Przeładuj stronę lub spróbuj później.");
    };
};

function* tasksFromLocaleStorageHandler(): SagaIterator {
    const tasks: Task[] = yield select(selectTasks);
    yield call(saveTasksToLocalStorage, tasks);
};

export function* watchFetchExampleTasks(): SagaIterator {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", tasksFromLocaleStorageHandler);
};