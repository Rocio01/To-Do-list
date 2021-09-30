/**
 * @jest-environment jsdom
 */

import { hideEllipsyIconDom, hideDeleteIconDom } from '../src/dom';
import displayTodos from '../src/display';

const arr = [{ description: '1', completed: true, index: 0 }, { description: '2', completed: false, index: 1 }];

document.body.innerHTML = ` <ul class="list-container p-5">
  <li class="list-group-item"><h6 class="h6">Today's To Do</h6></li>
 <form id="add-todo">
   <input class="form-control list-group fst-italic" id="add-todo-input" type="text"  placeholder="   Add to your list..." required>
  </form>
 
</ul>`;

displayTodos(arr);

const ellipsy = document.querySelector('.ellipsis');
const spanDelete = document.createElement('span');
spanDelete.className = 'span-delete';
const deleteIcon = document.createElement('i');
deleteIcon.className = 'far fa-trash-alt delete-right';
ellipsy.parentElement.appendChild(spanDelete);
spanDelete.appendChild(deleteIcon);
spanDelete.style.display = 'none';

describe(' hideEllipsyIconDom', () => {
  test('Correct disappearance of the ellipsy icon from the dom', () => {
    hideEllipsyIconDom(ellipsy, spanDelete);
    expect(ellipsy.firstChild.style.display).toEqual('none');
  });

  test('Correct appearance of the trash icon from the dom', () => {
    hideEllipsyIconDom(ellipsy, spanDelete);
    expect(spanDelete.style.display).toEqual('block');
  });

  test('Correct change of the background color', () => {
    hideEllipsyIconDom(ellipsy, spanDelete);
    expect(ellipsy.parentElement.style.background).toEqual('rgb(249, 236, 197)');
  });
});
describe(' hideDeleteIconDom', () => {
  test('Correctly changes background color white', () => {
    hideDeleteIconDom(spanDelete, ellipsy);
    expect(ellipsy.parentElement.style.background).toEqual('white');
  });

  test('Correctly changes style to display: block', () => {
    hideDeleteIconDom(spanDelete, ellipsy);
    expect(ellipsy.firstChild.style.display).toEqual('block');
  });

  test('Correctly changes style to display: none', () => {
    hideDeleteIconDom(spanDelete, ellipsy);
    expect(spanDelete.style.display).toEqual('none');
  });
});