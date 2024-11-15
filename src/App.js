import Container from "./Container";
import Form from "./Form";
import Tasks from "./Tasks";
import Header from "./Header";
import Buttons from "./Buttons";
import Section from "./Section";

let tasks = [
  { id: 1, content: "umyć samochód", done: false },
];

let hideDoneTask = false;

function App() {
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
        title="Lista zadań"
        sectionBody={<Tasks tasks={tasks} hideDoneTask={hideDoneTask} />}
        extraHeaderButtons={<Buttons tasks={tasks} hideDoneTask={hideDoneTask} />}
      />
    </Container>
  );
}

export default App;
