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
    <div className="container justify-content-center mt-5">
      <div className="d-flex mt-5  justify-content-center">
        <input
          type="text"
          className="createTodo bg-glass mt-5"
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
      </div>

      <div className="container justify-content-center">
        <div className="d-flex mt-2 mb-2  justify-content-center">
          <button className="createTodoBtn" onClick={onClickHandler}>
            Create Todo ✍️
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
