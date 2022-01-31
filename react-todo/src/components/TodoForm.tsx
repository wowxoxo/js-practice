import React, { FormEvent, useRef } from "react";
import { ITodoItem } from "../App";

interface TodoFormProps {
  onSubmit: (title: ITodoItem["title"]) => void;
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const value = inputRef.current?.value;
    console.log("ref", value);
    // debugger;
    value && props.onSubmit(value);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="something to do" ref={inputRef} />
      <button>Enter</button>
    </form>
  );
};

export default TodoForm;
