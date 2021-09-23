import ToDo from './todo';
import displayTodos from './display';

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

export { addTodoLs, getTodosls };
