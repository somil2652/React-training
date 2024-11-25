// Build a simple todo list component with a text input for adding new tasks and a list to display them. Use controlled components to handle the input and update the list of tasks.

import React, { useState } from "react";
const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addItem = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };
  return (
    <>
      <p>TO DO LIST:</p>
      <input
        type="text"
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter Task"
      />
      <button onClick={addItem}>ADD</button>
      <ul>
        {todos.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};
export default ToDoList;
