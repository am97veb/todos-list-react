import { ChangeEvent } from "react";
import { searchTasksParamName } from "../searchTasksParamName";
import { SearchInput } from "./styled";
import { useSearchParameter, useReplaceSearchParameter } from "./useFilterParameters";

const FilterTasks = () => {
    const searchTasks = useSearchParameter(searchTasksParamName);
    const replaceSearchParameter = useReplaceSearchParameter();

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        replaceSearchParameter(
            searchTasksParamName,
            target.value.trim() !== "" ? target.value : "",
        );
    };

    return (
        <SearchInput
            placeholder="Filtruj zadania"
            value={searchTasks || ""}
            onChange={onInputChange}
        />
    );
};

export default FilterTasks;