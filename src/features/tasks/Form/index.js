import { useState, useRef } from "react";
import { StyledForm, FormNewTask, FormButton } from "./styled"

const Form = ({ addTask }) => {
  const [newTask, setTask] = useState("");

  const focusRef = useRef(null)

  const onFormSubmit = (event) => {
    event.preventDefault();
    addTask(newTask.trim());
    setTask("");
  };

  return (
    <StyledForm
      onSubmit={onFormSubmit}
    >
      <FormNewTask
        ref={focusRef}
        value={newTask}
        placeholder="Co jest do zrobienia?"
        onChange={(event) => setTask(event.target.value)}
      />
      <FormButton
        onClick={() => focusRef.current.focus()}
      >
        Dodaj zadanie
      </FormButton>
    </StyledForm>
  );
};

export default Form;