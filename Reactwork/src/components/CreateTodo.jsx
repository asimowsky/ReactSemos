import React from "react";
import { useState } from "react";

const CreateTodo = (props) => {
  const { setTodos } = props;
  const generateId = () => {
    return new Date().getTime();
  };
  const [newTodo, setNewTodo] = useState("");

  const onClickHandler = () => {
    if (newTodo === "") {
      return alert("The input field is empty");
    } else {
      const checkBool = window.confirm("Is your todo completed?");
      const newTodoObj = {
        id: generateId(),
        title: newTodo,
        completed: checkBool,
      };
      setNewTodo("");
      setTodos((todos) => [...todos, newTodoObj]);
    }
  };

  return (
    <div className="container">
      <div className="inline-flex">
        <input
          type="text"
          className="createTodo bg-glass"
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
      </div>

      <button className="createTodoBtn" onClick={onClickHandler}>
        Create Todo ✍️
      </button>
    </div>
  );
};

export default CreateTodo;
