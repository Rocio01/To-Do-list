import ToDo from './todo';
import { addTodoLs, getTodosls, updateTodosLs } from './storage';
import displayTodos from './display';

const input = document.querySelector('#add-todo-input');
const form = document.querySelector('#add-todo');
const toDosArr = getTodosls();

const loadEventListeners = () => {
  window.addEventListener('DOMContentLoaded', displayTodos(toDosArr));

  const checkboxes = document.querySelectorAll('.check');
  const spans = document.querySelectorAll('.span-text');

  form.addEventListener('submit', () => {
    const description = input.value;
    const newTodo = new ToDo(description);
    addTodoLs(newTodo);
  });

  checkboxes.forEach((check) => {
    check.addEventListener('change', function () {
      if (this.checked === true) {
        const toDo = toDosArr[this.id];
        ToDo.changeStatus(toDo);
        updateTodosLs(toDo);
      } else {
        const toDo = toDosArr[this.id];
        ToDo.changeStatus(toDo);
        updateTodosLs(toDo);
      }
    });
  });

  spans.forEach((span) => {
    const description = span.textContent;

    span.addEventListener('click', function (e) {
      this.style.display = 'none';
      const newSpan = document.createElement('span');
      newSpan.innerHTML = `<form class="edit-todo w-25">
                           <input class="form-control list-group" id="add-todo-input" type="text"  placeholder="${description}" required>
                           </form>`;

      (e.target.parentElement).appendChild(newSpan);

      (newSpan.firstChild).addEventListener('submit', () => {
        alert('hello');
      });
    });
  });
};

export { loadEventListeners as default };