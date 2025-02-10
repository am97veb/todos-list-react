import { useDispatch, useSelector } from "react-redux";
import { toggleHideDone, allTasksDone, selectHideDone, selectEveryTaskDone, selectSomeTaskDone, selectAreTasksEmpty } from "../tasksSlice";
import { ButtonsWrapper, ExtraHeaderButtons, ExtraHeaderButtonsDisabled } from "../ExtraHeaderButtons";

const TasksListButtons = () => {
  const hideDone = useSelector(selectHideDone);
  const everyTaskDone = useSelector(selectEveryTaskDone);
  const someTaskDone = useSelector(selectSomeTaskDone);
  const areTaskEmpty = useSelector(selectAreTasksEmpty);
  const dispatch = useDispatch();

  return (
    areTaskEmpty || (
      <ButtonsWrapper>
        <ExtraHeaderButtons
          onClick={() => dispatch(toggleHideDone())}
        >
          {hideDone && someTaskDone ? "Pokaż" : "Ukryj"} ukończone
        </ExtraHeaderButtons>

        <ExtraHeaderButtonsDisabled
          onClick={() => dispatch(allTasksDone())}
          disabled={everyTaskDone}
        >
          Ukończ wszystkie
        </ExtraHeaderButtonsDisabled>
      </ButtonsWrapper>
    )
  );
};

export default TasksListButtons;