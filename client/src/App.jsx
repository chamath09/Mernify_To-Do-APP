import React from 'react';
import { TodoProvider } from './context/TodoContext';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import DateTime from './components/DateTime'; 

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-900 p-8">
        <DateTime /> 
        <h1 className="text-3xl text-center text-white mb-8">To-Do App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
