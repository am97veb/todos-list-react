import axios from "axios";

export const fetchApiData = async () => {
    try {
        const response = await axios.get("todo-list-react/exampleTasks");
        console.log(response.data);
    } catch (error) { 
        console.error ("coś jest nie tak", error);
    };
    return await response.json()
};
