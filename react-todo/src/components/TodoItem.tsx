import React from "react";
import { ITodoItem } from "../App";

interface TodoItemProps {
  todo: ITodoItem;
  onRemove: (id: ITodoItem["id"]) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onRemove }) => {
  const removeHandler = () => {
    onRemove(todo.id);
  };

  return (
    <li>
      <span>{todo.title}</span>
      <button onClick={removeHandler}>Remove</button>
    </li>
  );
};

export default TodoItem;
