import { Container } from "../../../common/Container";
import Form from "../Form";
import TasksList from "../TasksList";
import Header from "../../../common/Header";
import TasksListButtons from "../TasksListButtons";
import Section from "../../../common/Section";
import FilterTasks from "../FilterTasks";
import ExampleTasksButton from "../ExampleTasksButton";

function TasksPage() {

  return (
    <Container>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderButtons={<ExampleTasksButton />}
        sectionBody={<Form />}
      />

      <Section
        title="Wyszukiwarka"
        sectionBody={<FilterTasks />}
      />

      <Section
        title="Lista zadań"
        sectionBody={<TasksList />}
        extraHeaderButtons={<TasksListButtons />}
      />
    </Container>
  );
}

export default TasksPage;