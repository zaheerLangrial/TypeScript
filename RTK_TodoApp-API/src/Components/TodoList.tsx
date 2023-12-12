import {useSelector } from 'react-redux'
import { TodosType } from '../App'
import TodoCard from './TodoCard'

function TodoList() {

    const Todos = useSelector((state: { todos: TodosType}) => state.todos.todos)
  return (
    <ul className='max-w-2xl mx-auto'>
        {
          Todos.map((todo:TodosType) => {
                return (
                    <TodoCard todo={todo} key={todo.id} />
                )
            })
        }
    </ul>
  )
}

export default TodoList