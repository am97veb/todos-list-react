import Container from "./Container";
import Form from "./Form";
import Tasks from "./Tasks";
import Header from "./Header";
import Buttons from "./Buttons";
import Section from "./Section";
import { useState, useEffect } from "react";

function App() {
  const defaultTasks = [
    { id: 1, content: "umyć samochód", done: false },
    { id: 2, content: "zrobić zakupy", done: true },
  ];

  const [hideDoneTask, setHideDoneTask] = useState(false);
  const [tasks, setTask] = useState(defaultTasks);

  useEffect(() => {
    localStorage.setItem("tasksList", JSON.stringify(tasks));
  });


  const defaultTasksToggle = () => {
    if (tasks !== null) {
      setTask(defaultTasks === JSON.parse(localStorage.getItem("tasksList")))
    }
  };

  defaultTasksToggle();




  const toggleHideDoneTask = () => {
    if (someTaskDone(tasks)) {
      setHideDoneTask(hideDoneTask => !hideDoneTask);
    };
  };

  const someTaskDone = (tasks) => tasks.some(({ done }) => done);

  const toggleDone = (id) => {
    setTask(tasks => tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done
        };
      };

      return task;
    }));
  };

  const removeTask = (id) => {
    setTask(tasks => tasks.filter(task => task.id !== id));
  };

  const doneAll = () => {
    setTask(tasks => tasks.map(task =>
    ({
      ...task,
      done: true
    }),
    ));
  };

  const addTask = (newTask) => {
    if (newTask !== "") {
      return (setTask(tasks => [
        ...tasks,
        {
          content: newTask,
          done: false,
          id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1
        },
      ]));
    };
  };

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
  );
}

export default App;
