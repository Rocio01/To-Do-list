// import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

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

