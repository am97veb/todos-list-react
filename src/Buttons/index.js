import "./style.css";

const Buttons = ({ tasks, hideDoneTask, someTaskDone, toggleHideDoneTask, doneAll }) => (
  tasks.length > 0 && (
    <div className="newTaskButtons">
      <button
        onClick={toggleHideDoneTask}
        className="doneTaskButton">
        {hideDoneTask && someTaskDone(tasks) ? "Pokaż" : "Ukryj"} ukończone
      </button>

      <button
        onClick={doneAll}
        className="doneTaskButton"
        disabled={tasks.every(({ done }) => done)} >
        Ukończ wszystkie
      </button>
    </div>
  )
);

export default Buttons;