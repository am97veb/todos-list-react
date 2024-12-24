import { TasksList, ListItem, ListButton, Content } from "./styled";

const Tasks = ({ tasks, hideDoneTask, toggleDone, removeTask }) => (
  <TasksList>

    {tasks.map(task => (

      <ListItem
        key={task.id}
        hidden={hideDoneTask && task.done}
      >

        <ListButton
          onClick={() => toggleDone(task.id)}
        >
          {task.done ? "✔" : ""}
        </ListButton>

        <Content
          done={task.done}
        >
          {task.content}
        </Content>

        <ListButton
          remove
          onClick={() => removeTask(task.id)}
        >
          🗑
        </ListButton>

      </ListItem>
    ))}
  </TasksList>
)

export default Tasks;