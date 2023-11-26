import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/TodoSlice";

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
  const dispatch = useDispatch()

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
          <div className="flex space-x-3">
          <Button
            onClick={() => handleUpdate(todo)}
            className=""
          >
            Update
          </Button>
          <Button
             onClick={() => dispatch(deleteTodo(todo.id))}
            type="primary"
            danger
          >
            Delete
          </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
