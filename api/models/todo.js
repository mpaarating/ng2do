const mongoose = require('mongoose');

// define Model
const Todo = mongoose.model('Todo', {
  text: String
});

export default Todo;
