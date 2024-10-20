const Todo = require('../models/Todo');

// Get all tasks
const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

// Add a new task
const addTodo = async (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
  });
  const savedTodo = await newTodo.save();
  res.json(savedTodo);
};

// Update task
const updateTodo = async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, { completed: req.body.completed }, { new: true });
  res.json(updatedTodo);
};

// Delete task
const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
