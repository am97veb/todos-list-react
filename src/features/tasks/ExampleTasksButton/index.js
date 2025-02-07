import { useDispatch } from "react-redux";
import { ButtonsWrapper, ExtraHeaderButtons } from "../ExtraHeaderButtons";
import { fetchExampleTasks } from "../tasksSlice";

const ExampleTasksButton = () => {
  const dispatch = useDispatch();

  return (
    <ButtonsWrapper>
        <ExtraHeaderButtons
        onClick={() => dispatch(fetchExampleTasks())}
        >
            Pobierz przykładowe zadania
        </ExtraHeaderButtons>
    </ButtonsWrapper>
  )
};

export default ExampleTasksButton;