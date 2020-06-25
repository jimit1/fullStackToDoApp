const connection = require("./connection");

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
  // connection.end()
});

const seeAllTodos = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM todos", (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};

const showTodo = (todoId) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "select * from todos where ?",
      [{ id: todoId }],
      (err, data) => {
        err ? reject(err) : resolve(data);
      }
    );
  });
};

const addTodo = (todoText) => {
  return new Promise((resolve, reject) => {
    connection.query("insert into todos set ?", [{ text: todoText }], (err) => {
      err ? reject(err) : resolve({ msg: "Success" });
    });
  });
};

const deleteTodo = (todoId) => {
  return new Promise((resolve, reject) => {
    connection.query("delete from todos where ?", [{ id: todoId }], (err) => {
      err ? reject(err) : resolve({ msg: "Deleted todo" });
    });
  });
};

const editTodo = (obj) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "update todos set ? where ?",
      [
        { text: obj.todoText, completed: obj.todoCompleted },
        { id: obj.todoId },
      ],
      (err) => {
        err ? reject(err) : resolve({ msg: "Edited todo" });
      }
    );
  });
};

module.exports = { seeAllTodos, showTodo, addTodo, deleteTodo, editTodo };
