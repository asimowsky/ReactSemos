import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ListTodo from "./ListTodo";
import CreateTodo from "./CreateTodo";

const Todo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos?_limit=4";
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const deleteTodo = (id) => {
    const deleteOrNo = window.confirm("Are you sure that you want to delete?");
    if (deleteOrNo) {
      setTodos([...todos.filter((todo) => todo.id !== id)]);
    }
  };

  const markAsCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const updateTodoTitle = (id, newTitle) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = newTitle;
        }
        return todo;
      })
    );
  };

  return (
    <div className="container d-flex justify-content-center flex-column">
      <div className="div">
        <CreateTodo setTodos={setTodos} />
      </div>
      <ListTodo
        todos={todos}
        deleteTodo={deleteTodo}
        markAsCompleted={markAsCompleted}
        updateTodoTitle={updateTodoTitle}
      />
    </div>
  );
};

export default Todo;
