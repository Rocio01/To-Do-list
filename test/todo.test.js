import ToDo from '../src/todo';

const firstTodo = new ToDo('first task', true);
const arr = [];

describe(ToDo, () => {
  test('correct creation of the object according to the class ', () => {
    expect(firstTodo).toEqual({ description: 'first task', completed: true });
  });

  test('firstTodo is not an array', () => {
    expect(firstTodo).not.toEqual(['first task', true]);
  });

  test('ToDo static method addTodo', () => {
    ToDo.addTodo(firstTodo, arr);
    expect(arr.length).toBe(1);
  });

  test('Correct creation of the index atribute', () => {
    expect(firstTodo.index).toBe(0);
  });

  test('Correct deletion of the object inside the array', () => {
    ToDo.deleteToDo(firstTodo, arr);
    expect(arr.length).toBe(0);
  });

  test('Correct deletion of the object inside the array', () => {
    ToDo.deleteToDo(firstTodo, arr);
    expect(arr.length).not.toBe(1);
  });

  test('The correct change of completed attribute', () => {
    const secondTodo = new ToDo('second task', true);
    ToDo.changeStatus(secondTodo);
    expect(secondTodo).toEqual({ description: 'second task', completed: false })
  })
  


});


// static changeStatus(todo) {
//   todo.completed = !todo.completed;
// }

// static changeDescription(todo, newDescription) {
//   todo.description = newDescription;
// }