const localStorageKay = "tasks";

export const saveTasksToLocalStorage = (tasks) => 
    localStorage.setItem(localStorageKay, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () => 
    JSON.parse(localStorage.getItem(localStorageKay)) || [];