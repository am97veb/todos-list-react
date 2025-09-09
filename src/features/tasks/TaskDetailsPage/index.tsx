import { useParams } from "react-router-dom";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { selectTaskById } from "../tasksSlice";
import { useAppSelector } from "../../../core/hooks";

const TaskDetailsPage = () => {
  const { id } = useParams<{id: string}>();
  const task = useAppSelector(state => selectTaskById(state, id));

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