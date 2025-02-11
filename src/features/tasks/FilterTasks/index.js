import { searchTasksParamName } from "./searchTasksParamName";
import { SearchInput } from "./styled";
import { useSearchParameter, useReplaceSearchParameter } from "./useFilterParameters";

const FilterTasks = () => {
    const searchTasks = useSearchParameter(searchTasksParamName);
    const replaceSearchParameter = useReplaceSearchParameter();

    const onInputChange = ({ target }) => {
        replaceSearchParameter({
            key: searchTasksParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
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