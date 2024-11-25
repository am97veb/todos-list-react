import "./style.css";

const Buttons = ({ tasks, hideDoneTask, toggleHideDoneTask }) => (
  tasks.length > 0 && (
    <div className="newTaskButtons">
      <button
        onClick={toggleHideDoneTask}
        className="doneTaskButton">
        {hideDoneTask ? "Pokaż" : "Ukryj"} ukończone
      </button>

      <button
        className="doneTaskButton"
        disabled={tasks.every(({ done }) => done)} >
        Ukończ wszystkie
      </button>
    </div>
  )
);

export default Buttons;