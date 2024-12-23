import { defaultTasks } from "./DefaultTasks";
import { useState, useEffect } from "react";

 const useTasks = () => {
    const lokalStorageTask = () => {
        const lokalStorageReading = JSON.parse(localStorage.getItem("tasksList"))
        if (lokalStorageReading === null) {
            return defaultTasks;
        }

        return JSON.parse(localStorage.getItem("tasksList"));
    };

    const [tasks, setTask] = useState(lokalStorageTask);

    useEffect(() => {
        localStorage.setItem("tasksList", JSON.stringify(tasks));
    });

    const someTaskDone = (tasks) => tasks.some(({ done }) => done);

    const toggleDone = (id) => {
        setTask(tasks => tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    done: !task.done
                };
            };

            return task;
        }));
    };

    const removeTask = (id) => {
        setTask(tasks => tasks.filter(task => task.id !== id));
    };

    const doneAll = () => {
        setTask(tasks => tasks.map(task =>
        ({
            ...task,
            done: true
        }),
        ));
    };

    const addTask = (newTask) => {
        if (newTask !== "") {
            return (setTask(tasks => [
                ...tasks,
                {
                    content: newTask,
                    done: false,
                    id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1
                },
            ]));
        };
    };
    return {
        tasks,
        someTaskDone,
        toggleDone,
        removeTask,
        doneAll,
        addTask,
      }
};

export default useTasks;


