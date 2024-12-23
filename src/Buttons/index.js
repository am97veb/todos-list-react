import { AllTasksDone, ButtonsForAllTasks, DoneTasksHidden } from "./styled"

const Buttons = ({ tasks, hideDoneTask, someTaskDone, toggleHideDoneTask, doneAll }) => (
  tasks.length > 0 && (
    <ButtonsForAllTasks>
      <DoneTasksHidden
        onClick={toggleHideDoneTask}
      >
        {hideDoneTask && someTaskDone(tasks) ? "Pokaż" : "Ukryj"} ukończone
      </DoneTasksHidden>

      <AllTasksDone
        onClick={doneAll}
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </AllTasksDone>
    </ButtonsForAllTasks>
  )
);

export default Buttons;