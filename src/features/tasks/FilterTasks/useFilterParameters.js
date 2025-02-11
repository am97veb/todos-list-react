import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const useSearchParameter = (searchQueryParamName) => {
    const location = useLocation();
    const search = new URLSearchParams(location.search).get(searchQueryParamName);

    return search;
};

export const useReplaceSearchParameter = () => {
    const history = useHistory();
    const location = useLocation();
    const searchContent = new URLSearchParams(location.search);

    const replaceSearchParameter = ({key, value}) => {
        if (value === undefined) {
            searchContent.delete(key);
        } else {
            searchContent.set(key, value);
        }
        history.push(`${location.pathname}?${searchContent.toString()}`);
    }
    return replaceSearchParameter;
};