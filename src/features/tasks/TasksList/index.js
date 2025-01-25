import { List, ListItem, ListButton, Content } from "./styled";

const TasksList = ({ tasks, hideDoneTask, toggleDone, removeTask }) => (
  <List>

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
          $done={task.done}
        >
          {task.content}
        </Content>

        <ListButton
          $remove
          onClick={() => removeTask(task.id)}
        >
          🗑
        </ListButton>

      </ListItem>
    ))}
  </List>
)

export default TasksList;