import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

interface TodoListProps {
  setMudal: React.Dispatch<React.SetStateAction<boolean>>;
  setupdate : React.Dispatch<React.SetStateAction<Todo | undefined>>;
}

const TodoList: React.FC<TodoListProps> = ({ setMudal , setupdate}) => {

  const todos: Todo[] = useSelector((state: { todos: Todo[] }) => state.todos);

  const handleUpdate = (todo : Todo) => {
    setupdate(todo)
    setMudal(true)
  };

  return (
    <ul className="max-w-xl mx-auto ">
      {todos.map((todo) => (
        <li key={todo.id} className="flex justify-between items-center px-5 py-3 border-b">
          <h1>{todo.text}</h1>
          <Button
            onClick={() => handleUpdate(todo)}
            className=""
          >
            Update
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
