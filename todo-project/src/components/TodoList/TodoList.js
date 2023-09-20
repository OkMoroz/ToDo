import React from "react";
import TodoFooter from "../TodoFooter/TodoFooter";
import "./TodoList.css";

const TodoList = ({ todos, setTodos }) => {
  const updateTask = (id) => {
    const updatedTasks = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTasks);
  };

  const calcNumberOfIncompletedTasks = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  return (
    <div className="todolist-container">
      <div className="todos-container">
        <div>
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`todo-item ${todo.completed && "todo-item-active"}`}
              onClick={() => updateTask(todo.id)}
            >
              {todo.task}
            </div>
          ))}
        </div>
      </div>
      <div>
        <TodoFooter numberOfIncompleteTasks={calcNumberOfIncompletedTasks()} />
      </div>
    </div>
  );
};

export default TodoList;
