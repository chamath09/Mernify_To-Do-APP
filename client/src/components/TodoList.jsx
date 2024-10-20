import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import { FaTrashAlt, FaEdit } from 'react-icons/fa'; 
import axios from 'axios';

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  if (!Array.isArray(state.todos)) {
    console.error("state.todos is not an array:", state.todos);
    return <div className="text-white">Loading...</div>;
  }

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      dispatch({ type: 'DELETE_TODO', payload: id });
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {state.todos.map(todo => (
        <div key={todo._id} className="flex justify-between items-center bg-gray-800 text-white shadow-md p-4 my-2 rounded">
          <span>{todo.title}</span>
          <div className="flex items-center">
            <FaEdit className="text-blue-400 cursor-pointer mr-2" />
            <FaTrashAlt className="text-red-400 cursor-pointer" onClick={() => deleteTodo(todo._id)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
