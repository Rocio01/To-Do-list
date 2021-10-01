import ToDo from './todo';
import {
  addTodoLs, getTodosls, updateTodosLs, deleteTodoLS, clearLs,
} from './storage';
import displayTodos from './display';
import {
  edit, updateDescriptionDom, hideEditFormDom, hideDeleteIconDom, hideEllipsyIconDom,
} from './dom';

const input = document.querySelector('#add-todo-input');
const form = document.querySelector('#add-todo');
const toDosArr = getTodosls();

const loadEventListeners = () => {
  window.addEventListener('DOMContentLoaded', displayTodos(toDosArr));

  const checkboxes = document.querySelectorAll('.check');
  const spans = document.querySelectorAll('.span-text');
  const ellipsis = document.querySelectorAll('.ellipsis');

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
    span.addEventListener('click', (e) => {
      const newSpan = document.createElement('span');
      const editForm = document.createElement('form');
      editForm.className = 'edit-form';
      const inputEdit = document.createElement('input');
      newSpan.appendChild(editForm);

      edit(span, newSpan, editForm, inputEdit);
      (e.target.parentElement).appendChild(newSpan);

      editForm.addEventListener('submit', () => {
        updateDescriptionDom(inputEdit, editForm, toDosArr);
      });

      if (newSpan) {
        window.onclick = function (e) {
          if (newSpan !== e.target && span !== e.target && inputEdit !== e.target) {
            hideEditFormDom(newSpan);
          }
        };
      }
    });
  });

  ellipsis.forEach((ellipsy) => {
    const spanDelete = document.createElement('span');
    spanDelete.className = 'span-delete';
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'far fa-trash-alt delete-right';
    ellipsy.parentElement.appendChild(spanDelete);
    spanDelete.appendChild(deleteIcon);
    spanDelete.style.display = 'none';

    ellipsy.parentElement.addEventListener('mouseleave', () => {
      hideDeleteIconDom(spanDelete, ellipsy);
    });

    ellipsy.parentElement.addEventListener('mouseenter', () => {
      hideEllipsyIconDom(ellipsy, spanDelete);

      if (deleteIcon) {
        spanDelete.onclick = function () {
          const ind = this.previousElementSibling.previousElementSibling.previousElementSibling.id;
          const todo = toDosArr.find((x) => (x.index) === Math.floor(ind));
          deleteTodoLS(todo);
          window.location.reload();
        };
      }
    });
  });

  const clear = document.querySelector('.clear');
  if (clear) {
    clear.addEventListener('mouseenter', function () {
      this.className = 'underline';
    });
    clear.addEventListener('mouseleave', function () {
      this.className = 'clear';
    });
    clear.addEventListener('click', () => {
      clearLs();
      window.location.reload();
    });
  }
};

export { loadEventListeners as default };