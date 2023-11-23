import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/TodoSlice'

const AddTodo: React.FC =  () =>  {
    const dispatch = useDispatch()
    const [input , setInput] = useState<string>('')
    const handleInput = () => {
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <div className='flex justify-center items-center'>
        <input type="text"  className=' outline-none border' value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleInput} className=' px-3 border'>ADD New</button>
    </div>
  )
}

export default AddTodo