import React from 'react'
import { useDispatch } from 'react-redux';
import { titleUpdate } from '../Features/TodosSlice';

type MudalPropsType = {
  mudalIsOpen: boolean;
  setMudalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  todoId: number | null;
}

function Mudal({ mudalIsOpen, title, setTitle, todoId, setMudalIsOpen }: MudalPropsType) {
  const dispatch = useDispatch()
  const handleUpdateButton = () => {
    dispatch(titleUpdate({ title: title, id: todoId }))
    setMudalIsOpen(false)
    window.location.reload();
  }
  return (
    <div className={`flex w-full flex-col h-screen space-y-3 justify-center items-center absolute top-0 backdrop-blur-md ${mudalIsOpen ? '' : 'hidden'}`}>
      <input type="text" className='border outline-none' value={title} onChange={(e) => setTitle(e.target.value)} />
      <div className='flex space-x-3'>
        <button className='px-3 border' onClick={() => setMudalIsOpen(false)} >Cancel</button>
        <button className='px-3 border' onClick={handleUpdateButton}>Update</button>
      </div>
    </div>
  )
}
export default Mudal