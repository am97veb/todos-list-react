import Container from "./Container";
import Form from "./Form";
import Tasks from "./Tasks";
import Header from "./Header";
import Buttons from "./Buttons";
import Section from "./Section";
import { useState } from "react";

let tasks = [
  { id: 1, content: "umyć samochód", done: false },
  { id: 2, content: "zrobić zakupy", done: true },
];

function App() {
  const [hideDoneTask, setHideDoneTask] = useState(false);

  const toggleHideDoneTask = () => {
    setHideDoneTask(hideDoneTask => !hideDoneTask)
  }

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
        extraHeaderButtons={<Buttons tasks={tasks} hideDoneTask={hideDoneTask} toggleHideDoneTask={toggleHideDoneTask} />}
      />
    </Container>
  );
}

export default App;
