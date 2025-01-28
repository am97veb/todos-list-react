import { useDispatch, useSelector } from "react-redux";
import { AllTasksDone, ButtonsForAllTasks, DoneTasksHidden } from "./styled"
import { toggleHideDone, allTasksDone, selectTasks, selectHideDone, selectEveryTaskDone, selectSomeTaskDone, selectAreTasksEmpty } from "../tasksSlice";

const Buttons = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const everyTaskDone = useSelector(selectEveryTaskDone);
  const someTaskDone = useSelector(selectSomeTaskDone);
  const areTaskEmpty = useSelector(selectAreTasksEmpty);
  const dispatch = useDispatch();

  return (
    areTaskEmpty || (
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