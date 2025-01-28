import { useDispatch, useSelector } from "react-redux";
import { AllTasksDone, ButtonsForAllTasks, DoneTasksHidden } from "./styled"
import { selectTasks, toggleHideDone, allTasksDone } from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    tasks.length > 0 && (
      <ButtonsForAllTasks>
        <DoneTasksHidden
          onClick={() => dispatch(toggleHideDone())}
        >
          {hideDone && tasks.some(({ done }) => done) ? "Pokaż" : "Ukryj"} ukończone
        </DoneTasksHidden>

        <AllTasksDone
          onClick={() => dispatch(allTasksDone())}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </AllTasksDone>
      </ButtonsForAllTasks>
    )
  );
};

export default Buttons;