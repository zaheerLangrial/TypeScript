import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/TodoSlice'
import Input from 'antd/es/input/Input'
import { Button } from 'antd'

const AddTodo: React.FC =  () =>  {
    const dispatch = useDispatch()
    const [input , setInput] = useState<string>('')
    const handleInput = () => {
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <div className='flex justify-center items-center max-w-xl mx-auto space-x-2'>
        <Input type="text"  className='outline-none border' value={input} onChange={(e) => setInput(e.target.value)} />
        <Button type='primary' onClick={handleInput} className=' bg-blue-500'>ADD New</Button>
    </div>
  )
}

export default AddTodo