import { useDispatch, useSelector } from "react-redux";
import { List, ListItem, ListButton, Content } from "./styled";
import { toggleDone, removeTask, selectHideDone, selectTasks } from "../tasksSlice";

const TasksList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
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