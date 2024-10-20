import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const TodoContext = createContext();


const initialState = {
  todos: [],
};


const TodoReducer = (state, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return { ...state, todos: action.payload };
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'DELETE_TODO':
      return { ...state, todos: state.todos.filter(todo => todo._id !== action.payload) };
    default:
      return state;
  }
};


export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/todos');
        console.log("Fetched todos:", response.data);
        if (Array.isArray(response.data)) {
          dispatch({ type: 'GET_TODOS', payload: response.data });
        } else {
          console.error('Expected an array but received:', response.data);
          dispatch({ type: 'GET_TODOS', payload: [] });
        }
      } catch (error) {
        console.error('Error fetching todos:', error);
        dispatch({ type: 'GET_TODOS', payload: [] });
      }
    };

    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
