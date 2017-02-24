const {Router} = require('express');
const Todo = require('../models/Todo');

const router = Router();

// Get all todos
router.get('/todos', (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      res.send(err);
    }
    res.json(todos); // Return all todos in json
  });
});

// create a todo and return all todos
router.post('/api/todos', (req, res) => {

  // create a todo, information comes from AJAX request from Angular
  Todo.create({
    text: req.body.text,
    done: false
  }, (cErr) => {
    if (cErr) {
      res.send(cErr);
    }

    // get and return all the todos after you create another
    Todo.find((err, todos) => {
      if (err) {
        res.send(err);
      }
      res.json(todos);
    });

  });

});

// delete a todo
router.delete('todos/:todo_id', (req, res) => {
  Todo.remove({
    _id: req.params.todo_id
  }, (dErr) => {
    if (dErr) {
      res.send(dErr);
    }

    // get all remaining todos
    Todo.find((err, todos) => {
      if (err) {
        res.send(err);
      }
      res.json(todos);
    });

  });

});

export default router;
