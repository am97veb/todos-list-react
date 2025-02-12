import axios from "axios";
import { sourceApiData } from "./sourceApiData";

export const fetchApiData = async () => {
    // const response = await axios.get(sourceApiData);
    // return await response.data;
    const response = await fetch(sourceApiData);
  
    if (!response.ok) {
      throw new Error(response.statusText);
    };
  
    return await response.json();
}; 