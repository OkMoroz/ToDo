import React, { useState } from "react";
import AddInput from "../AddInput/AddInput";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import "./Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo">
      <Header title="Todo" />
      <div className="todo-container">
        <AddInput
          setTodos={setTodos}
          todos={todos} />
        <TodoList
          todos={todos}
          setTodos={setTodos} />
      </div>
    </div>
  );
};

export default Todo;
