import React from "react";
import { useState } from "react";

const ListTodo = (props) => {
  const { todos, deleteTodo, markAsCompleted, updateTodoTitle } = props;
  const [displayCompleted, setDisplayCompleted] = useState(true);
  const [editId, setEditId] = useState("");
  const [editTitle, setEditTitle] = useState("");

  const save = () => {
    updateTodoTitle(editId, editTitle);
    setEditId("");
  };
  const cancel = () => {
    setEditId("");
    setEditTitle("");
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>T/F</th>
            <th>Complete</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(
            (todo) =>
              (!todo.completed || displayCompleted) && (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  {editId && editId === todo.id ? (
                    <td>
                      <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        size={todo.title.length}
                        className="createTodo bg-glass"
                      />
                      <button className="bg-glass p-5" onClick={save}>
                        ✅
                      </button>
                      <button className="bg-glass p-5" onClick={cancel}>
                        ❌
                      </button>
                    </td>
                  ) : (
                    <td className="titleAlign">{todo.title}</td>
                  )}

                  <td>
                    <input type="checkbox" checked={todo.completed} />
                  </td>
                  <td>
                    <button
                      className="bg-glass p-10 h-inverse"
                      onClick={() => markAsCompleted(todo.id)}
                    >
                      ✅
                    </button>
                  </td>
                  <td>
                    <button
                      className="bg-glass p-10 h-inverse"
                      onClick={() => {
                        setEditId(todo.id);
                        setEditTitle(todo.title);
                      }}
                    >
                      ✏️
                    </button>
                  </td>
                  <td>
                    <button
                      className="bg-glass p-10 h-inverse"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
      <div>
        <label>Display Completed ? </label>
        <input
          type="checkbox"
          checked={displayCompleted}
          onChange={() => setDisplayCompleted(!displayCompleted)}
        />
      </div>
    </div>
  );
};

export default ListTodo;
