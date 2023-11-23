import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/TodoSlice';

const AddTodo: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text.trim()));
      setText('');
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} className=' outline-none border'/>
      <button className=' border  ml-5 px-3' onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
