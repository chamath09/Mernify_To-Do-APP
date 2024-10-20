import React, { useState, useContext } from 'react';
import TodoContext from '../context/TodoContext';
import axios from 'axios';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const { dispatch } = useContext(TodoContext);

  const addTodo = async () => {
    if (!title.trim()) return; 
    try {
      const res = await axios.post('http://localhost:5000/api/todos', { title });
      dispatch({ type: 'ADD_TODO', payload: res.data });
      setTitle('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-4">
      <div className="flex">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-600 rounded-l bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
          placeholder="Add new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white p-2 rounded-r hover:bg-blue-500 transition duration-300 flex-shrink-0"
          onClick={addTodo} 
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
