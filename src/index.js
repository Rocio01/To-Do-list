import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './todo';
import { addTodoLs, getTodosls } from './storage';
import displayTodos from './display';

const input = document.querySelector('#add-todo-input');
const form = document.querySelector('#add-todo');

form.addEventListener('submit', () => {
  const description = input.value;
  const newTodo = new ToDo(description);
  addTodoLs(newTodo);
});

const toDosArr = getTodosls();
displayTodos(toDosArr);

const checkboxes = document.querySelectorAll('.check');

checkboxes.forEach((check) => {
  check.addEventListener('change', function () {
    if (this.checked) {
      alert(this.id);
    }
  });
});
