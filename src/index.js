import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const toDoArray = [];

class ToDo {
  constructor(description, completed = false) {
    this.description = description;
    this.completed = completed;
  }

  addTodo() {
    toDoArray.push(this);
    this.index = toDoArray.indexOf(this);
  }

  deleteToDo() {
    toDoArray.splice(this.index, 1);
    return toDoArray;
  }

  changeStatus() {
    this.completed = !this.completed;
  }
}

const firstTask = new ToDo('do breakfast', true);
firstTask.addTodo();
const secondTask = new ToDo('morning session');
secondTask.addTodo();
const thirdTask = new ToDo('lunch');
thirdTask.addTodo();

const listContainer = document.querySelector('.list-container');

const displayTodos = () => {
  toDoArray.forEach((todo) => {
    const li = document.createElement('li');

    li.innerHTML = `<li class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                  ${todo.description}
                  </li>`;

    listContainer.appendChild(li);
  });
};

displayTodos();
