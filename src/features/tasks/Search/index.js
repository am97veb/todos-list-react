import { SearchInput } from "./styled";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";


const Search = () => {
    const history = useHistory();
    const location = useLocation();
    const searchContent = new URLSearchParams(location.search);
    const search = searchContent.get("szukaj");

    const onInputChange = ({ target }) => {
        if (target.value.trim() !== "") {
            searchContent.set("szukaj", target.value);
        } else {
            searchContent.delete("szukaj");
        };

        history.push(`${location.pathname}?${searchContent.toString()}`);
    };

    return (
        <SearchInput
            placeholder="Filtruj zadania"
            value={search || ""}
            onChange={onInputChange}
        />
    );
};

export default Search;