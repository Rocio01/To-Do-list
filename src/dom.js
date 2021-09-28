import ToDo from './todo';
import {
  updateTodosLs,
} from './storage';

const edit = (span, newSpan, editForm, inputEdit) => {
  const oldDescription = span.textContent;
  span.style.display = 'none';
  inputEdit.type = 'text';
  inputEdit.placeholder = oldDescription;
  inputEdit.className = 'edit-form';
  inputEdit.required = true;
  editForm.appendChild(inputEdit);
  newSpan.appendChild(editForm);
};

const updateDescriptionDom = (inputEdit, editForm, toDosArr) => {
  const newDescription = inputEdit.value;
  const p = editForm.parentElement.previousElementSibling.previousElementSibling;
  const indexC = p.previousElementSibling.previousElementSibling.id;
  const todo = toDosArr.find((x) => (x.index) === Math.floor(indexC));
  ToDo.changeDescription(todo, newDescription);
  updateTodosLs(todo);
};

const hideEditFormDom = (newSpan) => {
  newSpan.style.display = 'none';
  window.location.reload();
};

const hideDeleteIconDom = (spanDelete, ellipsy) => {
  spanDelete.style.display = 'none';
  ellipsy.firstChild.style.display = 'block';
  ellipsy.parentElement.style.background = 'white';
};

const hideEllipsyIconDom = (ellipsy, spanDelete) => {
  ellipsy.firstChild.style.display = 'none';
  spanDelete.style.display = 'block';
  ellipsy.parentElement.style.background = '#f9ecc5';
};

export {
  edit, updateDescriptionDom, hideEditFormDom, hideDeleteIconDom, hideEllipsyIconDom,
};