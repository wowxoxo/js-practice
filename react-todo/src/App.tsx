import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export interface ITodoItem {
  id: number;
  title: string;
}

function App() {
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  useEffect(() => {
    const arr: ITodoItem[] = [];
    arr.push({ id: 1, title: "First" });
    arr.push({ id: 2, title: "Second" });

    setTodos(arr);
  }, []);

  const submitHandler = (title: ITodoItem["title"]) => {
    // console.log("app", title);
    const todo: ITodoItem = {
      id: Date.now(),
      title
    };
    setTodos([...todos, todo]);
  };

  const removeTodoHandler = (id: ITodoItem["id"]) => {
    const arr = todos.filter((todo) => todo.id !== id);
    setTodos(arr);
  };

  return (
    <div>
      <TodoForm onSubmit={submitHandler} />
      <TodoList items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
