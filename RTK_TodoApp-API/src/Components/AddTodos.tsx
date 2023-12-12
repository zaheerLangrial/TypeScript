import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Features/TodosSlice';

function AddTodos() {
    const dispatch = useDispatch()
    const handleFrom = (e) => {
        e.preventDefault();
        dispatch(addTodo(e.target.text.value))
    }
    return (
        <div className=' max-w-2xl mx-auto flex flex-col justify-center'>
            <form className='flex flex-col gap-5 py-5' onSubmit={handleFrom}>
                <input type="text" name='text' className='border px-1 py-3 outline-none' placeholder='Add Text For Todo' />
                <button type='submit' className='border py-2'>ADD</button>
            </form>
        </div>
    )
}

export default AddTodos