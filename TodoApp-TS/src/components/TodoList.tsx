import React from 'react'
import {useSelector} from 'react-redux'


type Todo = {
    id : number ;
    text : string ;
    completed : boolean;
}

const  TodoList:React.FC =()=> {
    const todos : Todo[] = useSelector((state : {todos : Todo[]}) => state.todos)
  return (
    <ul className='text-center'>
        {
            todos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
            ))
        }
    </ul>
  )
}

export default TodoList