import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1 className='text-center'>Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
