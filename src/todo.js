class ToDo {
  constructor(description, completed = false, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  static addTodo(todo, arr) {
    arr.push(todo);
    todo.index = arr.indexOf(todo);
  }

  static deleteToDo(todo, arr) {
    arr.splice(todo.index, 1);
    return arr;
  }

  static changeStatus(todo) {
    todo.completed = !todo.completed;
  }

  static changeDescription(todo, newDescription) {
    todo.description = newDescription;
  }
}

export { ToDo as default };
