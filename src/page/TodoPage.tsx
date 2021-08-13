import { useState } from "react";
import uniqueId from "lodash.uniqueid";

import Form from "components/Form";
import { ITodo } from "global";

import { Heading, UnorderedList } from "@chakra-ui/react";

const TodoPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todoInput, setTodoInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todoInput.replace(/\s/g, "").length) {
      return;
    }
    const newTodo = {
      label: todoInput,
      timestamp: Date(),
      isDone: false,
      id: uniqueId(),
    };
    setTodoInput("");
    setTodos([newTodo, ...todos]);
  };

  const handleDelete = (id: string): void => {
    const remainingTodos = todos.filter((todo) => id !== todo.id);
    setTodos(remainingTodos);
  };

  const handleTodoUpdate = (id: string) => {
    const copy = [...todos];
    const indexOfTodo = copy.findIndex((todo) => todo.id === id);
    copy[indexOfTodo].isDone = !copy[indexOfTodo].isDone;
    setTodos(copy);
  };

  return (
    <div>
      <Heading as="h1" mb={8}>
        Todolist.io
      </Heading>
      <Form
        inputValue={todoInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default TodoPage;
