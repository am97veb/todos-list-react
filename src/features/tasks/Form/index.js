import { useState, useRef } from "react";
import { StyledForm, FormButton } from "./styled";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../tasksSlice";
import { Input } from "../Input";

const Form = () => {
  const [newTask, setTask] = useState("");
  const focusRef = useRef(null);
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTask = newTask.trim();

    trimmedNewTask &&
      dispatch(addTask({
        content: newTask,
        done: false,
        id: nanoid(),
      }));

    setTask("");
  };

  return (
    <StyledForm
      onSubmit={onFormSubmit}
    >
      <Input
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