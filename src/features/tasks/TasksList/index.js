import { useDispatch, useSelector } from "react-redux";
import { List, ListItem, ListButton, Content } from "./styled";
import { selectTasks, toggleDone, removeTask } from "../tasksSlice";

const TasksList = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(task => (

        <ListItem
          key={task.id}
          hidden={hideDone && task.done}
        >
          <ListButton
            onClick={() => dispatch(toggleDone(task.id))}
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
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </ListButton>

        </ListItem>
      ))}
    </List>
  );
};

export default TasksList;