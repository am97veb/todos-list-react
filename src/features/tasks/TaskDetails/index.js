import { useParams } from "react-router-dom";
import { Container } from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { useSelector } from "react-redux";
import { selectTaskById, selectTasks } from "../tasksSlice";

const TaskDetails = () => {
  const { id } = useParams();
  const task = useSelector(state => selectTaskById(state, id));

  return (
    <Container>
      <Header
        title="Szczegóły zadania"
      />
      <Section
        title={task.content}
        sectionBody={<>{task.done}</>} />
    </Container>
  );
}

export default TaskDetails;