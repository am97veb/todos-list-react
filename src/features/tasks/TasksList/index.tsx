import { useDispatch, useSelector } from "react-redux";
import { List, ListItem, ListButton, Content, StyledLink } from "./styled";
import { toggleDone, removeTask, selectHideDone } from "../tasksSlice";
import { useLocation } from "react-router-dom";
import { selectSearchTask } from "../tasksSlice";
import { toTaskDetails } from "../../../core/routes";
import { searchTasksParamName } from "../searchTasksParamName";
import { Task } from "../types";
import { useAppDispatch, useAppSelector } from "../../../core/hooks";

const TasksList = () => {
  const location = useLocation();
  const searchContent = new URLSearchParams(location.search);
  const search: string | null = searchContent.get(searchTasksParamName);

  const tasks = useAppSelector(state => selectSearchTask(state, search || ""));
  const hideDone = useAppSelector(selectHideDone);
  const dispatch = useAppDispatch();

  return (
    <List>
      {tasks.map((task: Task) => (
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
            <StyledLink
              to={toTaskDetails({ id: task.id })}
            >
              {task.content}
            </StyledLink>
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