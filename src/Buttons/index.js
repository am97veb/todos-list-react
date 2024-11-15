import "./style.css";

const Buttons = ({ tasks, hideDoneTask }) => (
  tasks.length > 0 && (
    <div className="newTaskButtons">
      <button className="doneTaskButton">{hideDoneTask ? "Pokaż" : "Ukryj"} ukończone </button>

      <button
        className="doneTaskButton"
        disabled={tasks.every(({ done }) => done)} >
        Ukończ wszystkie
      </button>
    </div>
  )
);

export default Buttons;