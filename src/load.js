import ToDo from './todo';
import { addTodoLs, getTodosls, updateTodosLs } from './storage';
import displayTodos from './display';

const input = document.querySelector('#add-todo-input');
const form = document.querySelector('#add-todo');
const toDosArr = getTodosls();

const loadEventListeners = () => {
  window.addEventListener('DOMContentLoaded', displayTodos(toDosArr));

  form.addEventListener('submit', () => {
    const description = input.value;
    const newTodo = new ToDo(description);
    addTodoLs(newTodo);
  });

  const checkboxes = document.querySelectorAll('.check');

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
};

export { loadEventListeners as default };