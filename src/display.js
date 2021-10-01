const displayTodos = (arr) => {
    const listContainer = document.querySelector('.list-container');
    const divButton = document.createElement('div');
    divButton.className = 'd-grid gap-2';
    const clearButton = document.createElement('button');
    clearButton.className = 'btn btn-light clear';
    clearButton.type = 'button';
    clearButton.innerText = 'Clear all completed';
    divButton.appendChild(clearButton);
    arr.forEach((todo) => {
        const li = document.createElement('li');
        li.className = 'list-item-todo ';
        if (todo.completed === true) {
            li.innerHTML = `<li class="list-group-item text-decoration-line-through class-${todo.index}  ">
      <input class="form-check-input me-1 check " id="${todo.index}" type="checkbox"  checked value="" onClick="window.location.reload()" >
      <span class="span-text class-${todo.index} "> ${todo.description} </span>
      <span class="ellipsis ml-auto "><i class="fas fa-ellipsis-v"></i></span>
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

    if (document.querySelector('.list-item-todo')) {
        listContainer.appendChild(divButton);
    }
};

export { displayTodos as default };