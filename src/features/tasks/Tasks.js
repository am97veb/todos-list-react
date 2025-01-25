import { Container } from "../../common/Container";
import Form from "./Form";
import TasksList from "./TasksList";
import Header from "../../common/Header";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import useTasks from "../../useTasks";
import { useState } from "react";



function Tasks() {
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
          sectionBody={<TasksList
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
  );
}

export default Tasks;