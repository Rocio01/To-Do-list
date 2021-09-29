/**
 * @jest-environment jsdom
 */

import displayTodos from "../src/display"

describe('displayTodos function', () => {
  const arr = [{description: "1", completed: false, index: 0}, {description: "2", completed: true, index: 1}]

  document.body.innerHTML = ` <ul class="list-container p-5">
  <li class="list-group-item"><h6 class="h6">Today's To Do</h6></li>
 <form id="add-todo">
   <input class="form-control list-group fst-italic" id="add-todo-input" type="text"  placeholder="   Add to your list..." required>
 
 </form>
 
</ul>`
  
const display = displayTodos(arr);

  test('A li element with the class list-item-todo exists', () => {
    let listItem = document.querySelector(".list-item-todo");
    expect(listItem).toBeTruthy();
  })

  test('Display the correct number of li elements', () => {
    let listItems = document.querySelectorAll(".list-item-todo");
    expect(listItems.length).toBe(2);
  })
  


})