import { useState, useEffect } from "react";
import { defaultTasks } from "./defaultTasks";

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
};

export default useTasks;


