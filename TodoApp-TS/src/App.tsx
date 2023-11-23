import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import AddTodo from './components/addTodo';
import store from './app/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
