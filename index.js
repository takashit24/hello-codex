const express = require('express');
const app = express();
const todos = require('./routes/todos');

app.use(express.json());
app.use('/todos', todos);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
