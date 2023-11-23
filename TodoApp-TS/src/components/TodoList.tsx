import React from 'react';
import { useSelector } from 'react-redux';

interface Todo {
    id : number ;
    text : string ;
    completed : boolean;
}

const TodoList: React.FC = () => {
const todos = useSelector((state: { todos: Todo[] }) => state.todos) ;
  console.log(todos)

  return (
    // <div>
    //     Hello
    // </div>
    <ul className=' mt-5'>
        {
            todos.map((todo:Todo) => {
                return (
                    <li key={todo.id} className='border'>{todo.text}</li>
                )
            })
        }
    </ul>
  );
};

export default TodoList;
