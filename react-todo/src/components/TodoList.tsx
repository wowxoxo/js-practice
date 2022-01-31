import React from "react";
import { ITodoItem } from "../App";
import TodoItem from "./TodoItem";

interface TodoListProps {
  items: ITodoItem[];
  onRemoveTodo: (id: ITodoItem["id"]) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onRemoveTodo }) => {
  const removeHandler = (id: ITodoItem["id"]) => {
    onRemoveTodo(id);
  };

  return (
    <React.Fragment>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <TodoItem todo={item} key={item.id} onRemove={removeHandler} />
          ))}
        </ul>
      ) : (
        <div>Нету дел, гуляем</div>
      )}
    </React.Fragment>
  );
};

export default TodoList;
