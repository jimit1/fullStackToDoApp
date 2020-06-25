const express = require("express");
const router = express.Router();
const {
  seeAllTodos,
  showTodo,
  addTodo,
  deleteTodo,
  editTodo,
} = require("../config/orm");

//Route to see all todos
router.get("/api", (req, res) => {
  seeAllTodos()
    .then((allTodos) => res.json(allTodos))
    .catch((err) => res.json(err));
});

//Route to see one todo by id
router.get("/api/find/:id", (req, res) => {
  showTodo(parseInt(req.params.id))
    .then((todo) => res.json(todo))
    .catch((err) => res.json(err));
});

//Route to add todo
router.post("/api", (req, res) => {
  addTodo(req.body.text)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//Route to delete a todo
router.delete("/api/delete/:id", (req, res) => {
  deleteTodo(parseInt(req.params.id))
    .then((data) => res.send(data))
    .catch((err) => res.json(err));
});

//Route to edit a todo
router.patch("/api/edit/", (req, res) => {
  editTodo({
    todoText: req.body.todoText,
    todoId: parseInt(req.body.todoId),
    todoCompleted: req.body.completed === "false" ? false : true,
  })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = router;
