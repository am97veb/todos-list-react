import { useDispatch, useSelector } from "react-redux";
import { List, ListItem, ListButton, Content } from "./styled";
import { toggleDone, removeTask, selectHideDone, selectTasks } from "../tasksSlice";
import { Link } from "react-router-dom";

const TasksList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
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
            $done={task.done}>
            <Link
              to={`/zadania/${task.id}`}
            >
              {task.content}
            </Link>
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
