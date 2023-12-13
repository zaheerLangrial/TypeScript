import { useDispatch } from 'react-redux'
import { addTodo } from '../Features/TodosSlice';

function AddTodos() {
    const dispatch = useDispatch()
    const handleFrom = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (e.target.text.value) {
            dispatch(addTodo(e.target.text.value))
            e.target.text.value = ''
            window.location.reload();
        } else {
            alert('Please Enter Strings')
        }
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