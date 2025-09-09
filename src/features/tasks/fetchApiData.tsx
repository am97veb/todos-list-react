import axios from "axios";
import { sourceApiData } from "./sourceApiData";

export const fetchApiData = async () => {
    const response = await axios.get<string[]>(sourceApiData);
    return response.data;
}; 