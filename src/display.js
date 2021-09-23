const listContainer = document.querySelector('.list-container');

const displayTodos = (arr) => {
  arr.forEach((todo) => {
    const li = document.createElement('li');
    if (todo.completed === true) {
      li.innerHTML = `<li class="list-group-item">
      <input class="form-check-input me-1 check" id="${todo.index}" type="checkbox"  checked value="" aria-label="...">
      ${todo.description}
      </li>`;
    } else {
      li.innerHTML = `<li class="list-group-item">
      <input class="form-check-input me-1 check" id="${todo.index}" type="checkbox"  value="" aria-label="...">
      ${todo.description}
      </li>`;
    }

    listContainer.appendChild(li);
  });
};

export { displayTodos as default };
