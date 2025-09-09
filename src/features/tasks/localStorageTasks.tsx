import { Task } from "./types";

const localStorageKey = "tasks";

export const saveTasksToLocalStorage = (tasks: Task[]) => 
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = (): Task[] => {
    const taskFromLocaleStorage = localStorage.getItem(localStorageKey);
    return taskFromLocaleStorage ? JSON.parse(taskFromLocaleStorage) : [];
};