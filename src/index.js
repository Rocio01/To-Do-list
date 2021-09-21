// import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const toDoArray = [];

const generateID = () => Math.floor(Math.random() * 10000);
class ToDo {
  constructor(description, completed) {
    this.description = description;
    this.completed = completed;
    this.id = generateID();
  }

  addTodo() {
    toDoArray.push(this);
  }

  deleteToDo() {
    toDoArray.splice(toDoArray.indexOf(this.id), 1);
    return toDoArray;
  }

  changeStatus() {
    this.completed = !this.completed;
  }
}

