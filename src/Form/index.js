import { useState } from "react";
import "./style.css";

const Form = ({addTask}) => {
  const [newTask, setTask] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addTask(newTask.trim());
    setTask("");
  };

  return (
    <form
      className="form"
      onFormSubmit={onFormSubmit}>
      <input
        value={newTask}
        className="form__newTask" placeholder="Co jest do zrobienia?"
        onChange={(event) => setTask(event.target.value)} />
      <button
        onClick={addTask}
        className="form__button">Dodaj zadanie</button>
    </form>
  )
};

export default Form;