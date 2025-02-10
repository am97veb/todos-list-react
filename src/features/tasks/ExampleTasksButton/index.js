import { useDispatch, useSelector } from "react-redux";
import { ButtonsWrapper, ExtraHeaderButtonsDisabled } from "../ExtraHeaderButtons";
import { fetchExampleTasks, selectFatchDataStatus } from "../tasksSlice";

const ExampleTasksButton = () => {
    const fetchDataStatus = useSelector(selectFatchDataStatus);
    const dispatch = useDispatch();


    return (
        <ButtonsWrapper>
            <ExtraHeaderButtonsDisabled
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={fetchDataStatus}
            >
                {fetchDataStatus ? "Ładowanie" : "Pobierz przykładowe zadania"}
            </ExtraHeaderButtonsDisabled>
        </ButtonsWrapper>
    )
};

export default ExampleTasksButton;