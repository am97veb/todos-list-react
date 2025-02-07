import { Container } from "../../common/Container";
import Form from "./Form";
import TasksList from "./TasksList";
import Header from "../../common/Header";
import TasksListButtons from "./TasksListButtons";
import Section from "../../common/Section";
import Search from "./Search";
import ExampleTasksButton from "./ExampleTasksButton";

function Tasks() {

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
        sectionBody={<Search />}
      />

      <Section
        title="Lista zadań"
        sectionBody={<TasksList />}
        extraHeaderButtons={<TasksListButtons />}
      />
    </Container>
  );
}

export default Tasks;