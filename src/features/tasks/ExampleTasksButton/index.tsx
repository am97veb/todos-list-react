import { useDispatch, useSelector } from "react-redux";
import { ButtonsWrapper, ExtraHeaderButtonsDisabled } from "../ExtraHeaderButtons";
import { fetchExampleTasks, selectLoading } from "../tasksSlice";

const ExampleTasksButton = () => {
    const loading = useSelector(selectLoading);
    const dispatch = useDispatch();

    return (
        <ButtonsWrapper>
            <ExtraHeaderButtonsDisabled
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={loading}
            >
                {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
            </ExtraHeaderButtonsDisabled>
        </ButtonsWrapper>
    )
};

export default ExampleTasksButton;