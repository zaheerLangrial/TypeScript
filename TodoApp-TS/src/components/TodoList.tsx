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
    <ul className="text-center">
      {todos.map((todo) => (
        <li key={todo.id}>
          <h1>{todo.text}</h1>
          <button
            onClick={() => handleUpdate(todo)}
            className=" bg-blue-500 text-white px-2 py-1"
          >
            Update
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
