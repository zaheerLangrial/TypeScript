import { useDispatch } from 'react-redux'
import { TodosType } from '../App'
import { deleteTodo, updateTodo } from '../Features/TodosSlice'

type todoCardProps = {
    todo : TodosType
}

function TodoCard({todo}: todoCardProps) {
    const dispatch = useDispatch()
    return (
        <li key={todo.id} className='flex justify-between items-center py-3 border-b'>
            <p>{todo.id}</p>
            <p>{todo.title}</p>
            <div className='flex space-x-3'>
                <input type="checkbox" checked={todo.completed} onChange={() => dispatch(updateTodo({id : todo.id , completed : todo.completed}))}/>
                <button className='px-3 border' onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            </div>
        </li>
    )
}

export default TodoCard