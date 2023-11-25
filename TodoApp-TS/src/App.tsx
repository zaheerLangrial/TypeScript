import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList';
import Mudal from './components/Mudal';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
const App: React.FC = () => {
  const [update , setupdate] = useState<Todo>()
  const [mudal , setMudal] = useState<boolean>(false)
  return (
    <Provider store={store}>
      <div>
        <h1 className='text-center'>Todo App</h1>
        <AddTodo />
        <TodoList setMudal={setMudal} setupdate={setupdate}/>
        <Mudal setMudal={setMudal} mudal={mudal} update={update} setupdate={setupdate}/>
      </div>
    </Provider>
  );
};

export default App;
