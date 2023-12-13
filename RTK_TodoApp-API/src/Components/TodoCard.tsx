import { useDispatch } from 'react-redux'
import { TodosType } from '../App'
import { deleteTodo, updateTodo } from '../Features/TodosSlice'
import Mudal from './Mudal';
import { useState } from 'react';

type todoCardProps = {
    todo : TodosType;
}

function TodoCard({todo}: todoCardProps) {
    const [mudalIsOpen , setMudalIsOpen] = useState(false)
    const [todoId , setTodoId] = useState<number | null>(null)
    const [title , setTitle] = useState('')
    const dispatch = useDispatch()

    const openMudal = () => {
        console.log(todo.id)
        setTodoId(todo.id)
        setTitle(todo.title)
        setMudalIsOpen(true)
    }

    const handleCheckbox = () => {
        dispatch(updateTodo({id : todo.id , completed : todo.completed}))
        window.location.reload()
    }
    return (
        <li key={todo.id} className='flex justify-between items-center py-3 border-b'>
            <p>{todo.id}</p>
            <p>{todo.title}</p>
            <div className='flex space-x-3'>
                <input type="checkbox" checked={todo.completed} onChange={handleCheckbox} />
                <button className='px-3 border' onClick={openMudal}>Update</button>
                <button className='px-3 border' onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            </div>
            <Mudal mudalIsOpen={mudalIsOpen} setTitle={setTitle} title={title} todoId={todoId} setMudalIsOpen={setMudalIsOpen} />
        </li>
    )
}

export default TodoCard