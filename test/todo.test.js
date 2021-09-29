import ToDo from '../src/todo';

const firstTodo = new ToDo('first task', true);
const arr = [];

describe(ToDo, () => {
  test('correct creation of the object according to the class ', () => {
    expect(firstTodo).toEqual({ description: 'first task', completed: true});
  });

  test('that firstTodo is not an array', () => {
    expect(firstTodo).not.toEqual(['first task', true]);
    
  });

  test('ToDo static method addTodo', () => {
    ToDo.addTodo(firstTodo, arr)
    expect(arr.length).toBe(1)
    
  });

  
});






// static deleteToDo(todo, arr) {
//   arr.splice(todo.index, 1);
//   return arr;
// }
