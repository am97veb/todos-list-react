import { Container } from "../../common/Container";
import Form from "./Form";
import TasksList from "./TasksList";
import Header from "../../common/Header";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Search from "./Search";

function Tasks() {

  return (
    <Container>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        sectionBody={<Form />}
      />

      <Section
        title="Wyszukiwarka"
        sectionBody={<Search />}
      />

      <Section
        title="Lista zadań"
        sectionBody={<TasksList />}
        extraHeaderButtons={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;