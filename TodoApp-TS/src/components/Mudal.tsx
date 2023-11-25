import React from 'react'
import { useDispatch } from 'react-redux';
import { upDateTodo } from '../features/TodoSlice';


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
    <div className={` justify-center items-center w-full h-screen absolute top-0 space-x-3 ${mudal ? 'flex' : 'hidden'}`}>
        <input type="text" className=' outline-none border px-1' value={update?.text || ''} onChange={(e) => setupdate({...update , text: e.target.value})}/>
        <button className=' bg-blue-500 text-white px-2 py-1' onClick={handleUpdateButton}>Update</button>
        <button onClick={() => setMudal(false)} className=' bg-blue-500 text-white px-2 py-1'>Cancel</button>
    </div>
  )
}

export default Mudal