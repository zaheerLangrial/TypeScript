import React from 'react'
import { useDispatch } from 'react-redux';
import { upDateTodo } from '../features/TodoSlice';
import { Button, Input } from 'antd';


type Todo = {
    id: number;
    text: string;
    completed: boolean;
  };
type mudalProps = {
    setMudal : React.Dispatch<React.SetStateAction<boolean>>;
    mudal : boolean
    update : Todo
    setupdate : React.Dispatch<React.SetStateAction<Todo | undefined>>
}

const Mudal:React.FC<mudalProps> =({setMudal , mudal , update , setupdate})=> {
  const dispatch = useDispatch()
  const handleUpdateButton = () => {
    dispatch(upDateTodo({id : update.id , text : update.text}))
    setMudal(false)
  }
  return (
    <div className={`items-center justify-center space-y-3 max-w-xl h-screen absolute top-0 right-[40%] flex-col space-x-3 ${mudal ? 'flex' : 'hidden'}`}>
        <Input type="text" className=' outline-none border px-1' value={update?.text || ''} onChange={(e) => setupdate({...update , text: e.target.value})}/>
        <div className='flex space-x-3'>
        <Button type='default' className='' onClick={handleUpdateButton}>Update</Button>
        <Button type='primary' danger onClick={() => setMudal(false)} className=' bg-blue-500 text-white px-2 py-1'>Cancel</Button>
        </div>
    </div>
  )
}

export default Mudal