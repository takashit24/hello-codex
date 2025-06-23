const express = require('express');
const router = express.Router();

let todoList = [
  { id: 1, title: 'Codexを試す', done: false },
  { id: 2, title: 'Claudeと比較する', done: true }
];

router.get('/', (req, res) => {
  res.json(todoList);
});

router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const newTodo = { id: Date.now(), title, done: false };
  todoList.push(newTodo);
  res.status(201).json(newTodo);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todoList = todoList.filter(todo => todo.id !== id);
  res.status(204).send();
});

module.exports = router;
