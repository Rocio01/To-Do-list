const listContainer = document.querySelector('.list-container');

const displayTodos = (arr) => {
  arr.forEach((todo) => {
    const li = document.createElement('li');
    if (todo.completed === true) {
      li.innerHTML = `<li class="list-group-item text-decoration-line-through class-${todo.index}">
      <input class="form-check-input me-1 check " id="${todo.index}" type="checkbox"  checked value="" onClick="window.location.reload()" >
      <span class="span-text class-${todo.index}"> ${todo.description} </span>
      <span class="ellipsis"><i class="fas fa-ellipsis-v"></i></span>
      </li>`;
    } else {
      li.innerHTML = `<li class="list-group-item ">
      <input class="form-check-input me-1 check" id="${todo.index}" type="checkbox"  value="" onClick="window.location.reload()">
      <span class="span-text"> ${todo.description} </span>
      <span class="ellipsis"><i class="fas fa-ellipsis-v"></i></span>
      </li>`;
    }

    listContainer.appendChild(li);
  });
};

export { displayTodos as default };
