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
    const oldDescription = span.textContent;

    span.addEventListener('click', function (e) {
      this.style.display = 'none';
      const newSpan = document.createElement('span');
      const editForm = document.createElement('form');
      const inputEdit = document.createElement('input');
      inputEdit.type = 'text';
      inputEdit.placeholder = oldDescription;
      inputEdit.className = 'edit-form';
      editForm.required = true;
      editForm.appendChild(inputEdit);
      newSpan.appendChild(editForm);
      (e.target.parentElement).appendChild(newSpan);

      editForm.addEventListener('submit', function () {
        const newDescription = inputEdit.value;
        const indexC = this.parentElement.previousElementSibling.previousElementSibling.id;
        const todo = toDosArr.find((x) => (x.index) === Math.floor(indexC));
        ToDo.changeDescription(todo, newDescription);
        updateTodosLs(todo);
      });

      if (newSpan !== null) {
        window.onclick = function (e) {
          if (newSpan !== e.target && span !== e.target && inputEdit !== e.target) {
            newSpan.style.display = 'none';
            window.location.reload();
          }
        };
      }
    });
  });
};

export { loadEventListeners as default };