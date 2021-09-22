import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const toDoArray = [];
const listContainer = document.querySelector('.list-container');
const input = document.querySelector('#add-todo-input');
const form = document.querySelector('#add-todo');

class ToDo {
  constructor(description, completed = false, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  static addTodo(todo, arr) {
    arr.push(todo);
    todo.index = arr.indexOf(todo);
  }

  static deleteToDo(todo, arr) {
    arr.splice(todo.index, 1);
    return arr;
  }

  static changeStatus(todo) {
    todo.completed = !todo.completed;
  }
}

const addTodoLs = (todo) => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = toDoArray;
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  ToDo.addTodo(todo, todos);

  localStorage.setItem('todos', JSON.stringify(todos));
};

form.addEventListener('submit', () => {
  const description = input.value;
  const newTodo = new ToDo(description);
  addTodoLs(newTodo);
});

const displayTodos = (arr) => {
  arr.forEach((todo) => {
    const li = document.createElement('li');

    li.innerHTML = `<li class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                  ${todo.description}
                  </li>`;

    listContainer.appendChild(li);
  });
};

const getTodosls = () => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = toDoArray;
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  displayTodos(todos);
};

getTodosls();