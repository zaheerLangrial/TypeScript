import { useDispatch } from 'react-redux'
import './App.css'
import { useEffect } from 'react';
import { fetchData } from './Features/TodosSlice';
import { AppDispatch } from './store/Store';
import AddTodos from './Components/AddTodos';
import TodoList from './Components/TodoList';

export type TodosType = {
  todos: any;
  id: number;
  title: string;
  completed: boolean;
}

function App() {

  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <>
      <h1 className="bg-gray-300 text-center text-3xl font-bold py-3">
        Todo App
      </h1>
      <AddTodos />
      <TodoList />
    </>
  )
}

export default App
