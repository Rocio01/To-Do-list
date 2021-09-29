/**
 * @jest-environment jsdom
 */

import displayTodos from '../src/display';

describe('displayTodos function', () => {
  const arr = [{ description: '1', completed: true, index: 0 }, { description: '2', completed: false, index: 1 }];

  document.body.innerHTML = ` <ul class="list-container p-5">
  <li class="list-group-item"><h6 class="h6">Today's To Do</h6></li>
 <form id="add-todo">
   <input class="form-control list-group fst-italic" id="add-todo-input" type="text"  placeholder="   Add to your list..." required>
  </form>
 
</ul>`;

  displayTodos(arr);

  test('A li element with the class list-item-todo exists', () => {
    const listItem = document.querySelector('.list-item-todo');
    expect(listItem).toBeTruthy();
  });

  test('Display the correct number of li elements', () => {
    const listItems = document.querySelectorAll('.list-item-todo');
    expect(listItems.length).toBe(2);
  });

  test('Display the correct number of span elements with .span-text', () => {
    const spanItems = document.querySelectorAll('.span-text');
    expect(spanItems.length).toBe(2);
  });

  test('Display the correct number of span elements with .ellipsis', () => {
    const ellipsisItems = document.querySelectorAll('.ellipsis');
    expect(ellipsisItems.length).toBe(2);
  });

  test('Displays the correct number of input elements', () => {
    const inputs = document.getElementsByTagName('input');
    expect(inputs.length).toBe(3);
  });

  test('Displays the correct number of checkboxes for list items', () => {
    const checkInputs = document.getElementsByClassName('form-check-input');
    expect(checkInputs.length).toBe(2);
  });

  test('Displays the correct description', () => {
    const firstDescription = document.querySelector('.span-text');
    expect(firstDescription.innerHTML).toEqual(" 1 ");
  });

  test('Displays the correct description', () => {
    const firstDescription = document.querySelector('.span-text');
    expect(firstDescription.innerHTML).not.toEqual(" 2 ");
  });

  test('Displays the checked attribute when the todo is completed = true', () => {
    const firstCheckbox = document.querySelector('.form-check-input');
    expect(firstCheckbox.checked).toEqual(true);
  });

  
  test('Only Displays the checked attribute when the todo is completed = true', () => {
    const firstCheckbox = document.querySelector('.form-check-input');
    expect(firstCheckbox.checked).not.toEqual(false);
  });

});
