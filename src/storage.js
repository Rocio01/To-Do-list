import ToDo from './todo';

const addTodoLs = (todo) => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  ToDo.addTodo(todo, todos);

  localStorage.setItem('todos', JSON.stringify(todos));
};

const getTodosls = () => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  return todos;
};

const updateTodosLs = (todo) => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos[todo.index] = todo;
  localStorage.setItem('todos', JSON.stringify(todos));
};

const deleteTodoLS = (todo) => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todos.findIndex((x) => todo.index === x.index);
  todos.splice(todoIndex, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
};

export {
  addTodoLs, getTodosls, updateTodosLs, deleteTodoLS,
};
