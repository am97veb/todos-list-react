import { toggleHideDone, allTasksDone, selectHideDone, selectEveryTaskDone, selectSomeTaskDone, selectAreTasksEmpty } from "../tasksSlice";
import { ButtonsWrapper, ExtraHeaderButtons, ExtraHeaderButtonsDisabled } from "../ExtraHeaderButtons";
import { useAppDispatch, useAppSelector } from "../../../core/hooks";

const TasksListButtons = () => {
  const hideDone = useAppSelector(selectHideDone);
  const everyTaskDone = useAppSelector(selectEveryTaskDone);
  const someTaskDone = useAppSelector(selectSomeTaskDone);
  const areTaskEmpty = useAppSelector(selectAreTasksEmpty);
  const dispatch = useAppDispatch();

  return areTaskEmpty ? null : (
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
    );
};

export default TasksListButtons;