import { useDispatch, useSelector } from "react-redux";
import { AllTasksDone, ButtonsForAllTasks, DoneTasksHidden } from "./styled"
import { toggleHideDone, allTasksDone, selectTasksState, selectEveryTaskDone, selectSomeTaskDone } from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const everyTaskDone = useSelector(selectEveryTaskDone);
  const someTaskDone = useSelector(selectSomeTaskDone);
  const dispatch = useDispatch();

  return (
    tasks.length > 0 && (
      <ButtonsForAllTasks>
        <DoneTasksHidden
          onClick={() => dispatch(toggleHideDone())}
        >
          {hideDone && someTaskDone ? "Pokaż" : "Ukryj"} ukończone
        </DoneTasksHidden>

        <AllTasksDone
          onClick={() => dispatch(allTasksDone(tasks))}
          disabled={everyTaskDone}
        >
          Ukończ wszystkie
        </AllTasksDone>
      </ButtonsForAllTasks>
    )
  );
};

export default Buttons;