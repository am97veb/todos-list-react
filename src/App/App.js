import Container from "./Container";
import Form from "./Form";
import Tasks from "./Tasks";
import Header from "./Header";
import Buttons from "./Buttons";
import Section from "./Section";
import useTasks from "./useTasks";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./globalStyle";

function App() {
  const [hideDoneTask, setHideDoneTask] = useState(false);

  const toggleHideDoneTask = () => {
    if (someTaskDone(tasks)) {
      setHideDoneTask(hideDoneTask => !hideDoneTask);
    };
  };

  const {
    tasks,
    someTaskDone,
    toggleDone,
    removeTask,
    doneAll,
    addTask,
  } = useTasks();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
          <Header
            title="Lista zadań"
          />

          <Section
            title="Dodaj nowe zadanie"
            sectionBody={<Form
              addTask={addTask}
            />}
          />

          <Section
            title="Lista zadań"
            sectionBody={<Tasks
              tasks={tasks}
              hideDoneTask={hideDoneTask}
              toggleDone={toggleDone}
              removeTask={removeTask}
            />}
            extraHeaderButtons={<Buttons
              tasks={tasks}
              hideDoneTask={hideDoneTask}
              someTaskDone={someTaskDone}
              toggleHideDoneTask={toggleHideDoneTask}
              doneAll={doneAll}
            />}
          />
      </Container>
    </ThemeProvider>
  );
}

export default App;
