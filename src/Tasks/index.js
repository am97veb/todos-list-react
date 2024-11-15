import "./style.css"

const Tasks = ({ tasks, hideDoneTask }) => (
  <ul className="tasksList">
    {tasks.map(task => (
      <li key={task.id} className={`list__item${hideDoneTask && task.done ? " list__item--hidden" : ""}`}>
        <button className="listButton">{task.done ? "✔" : ""}</button>
        <p className={`listText ${task.done ? " list__item--done" : ""}`}> {task.content} </p>
        <button className="listButton--remove">🗑</button>
      </li>
    ))}

  </ul >
)

export default Tasks;