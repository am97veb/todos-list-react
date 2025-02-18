import { useParams } from "react-router-dom";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { useSelector } from "react-redux";
import { selectTaskById } from "../tasksSlice";

const TaskDetailsPage = () => {
  const { id } = useParams();
  const task = useSelector(state => selectTaskById(state, id));

  return (
    <Container>
      <Header
        title="Szczegóły zadania"
      />
      <Section
        title={
          task ? task.content : "Wybacz, nie ma takiego zadania😕"
        }
        sectionBody={
          task && (
          <>
            <strong>Ukończono:</strong>
            {" "}
            {task.done ? "Tak" : "Nie"}
          </>
        )}
      />
    </Container>
  );
}

export default TaskDetailsPage;