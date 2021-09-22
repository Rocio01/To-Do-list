import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const toDoArray = [{ description: 'breakfast', completed: 'true', index: 0 }, { description: 'lunch', completed: 'false', index: 1 }];
const listContainer = document.querySelector('.list-container');
const input = document.querySelector('#add-todo-input');
const form = document.querySelector('#add-todo');

class ToDo {
  constructor(description, completed = false, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  addTodo() {
    toDoArray.push(this);
    this.index = toDoArray.indexOf(this);
  }

  deleteToDo() {
    toDoArray.splice(this.index, 1);
    return toDoArray;
  }

  changeStatus() {
    this.completed = !this.completed;
  }
}

// construction of the three object to populate the toDoArray to see class functionality

const third = new ToDo('Go to the bank');
third.addTodo();

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

const addTodoLs = (todo) => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.push(todo);
  todo.index = todos.indexOf(todo);

  localStorage.setItem('todos', JSON.stringify(todos));
};

form.addEventListener('submit', () => {
  const description = input.value;
  const newTodo = new ToDo(description);
  addTodoLs(newTodo);
});

const getTodosls = () => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  displayTodos(todos);
};

// Display of the toDoArray for the first milestone
displayTodos(toDoArray);

getTodosls();
