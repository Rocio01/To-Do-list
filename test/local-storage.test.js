import {
  addTodoLs, getTodosls, deleteTodoLS, updateTodosLs, clearLs,
} from '../src/storage';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

describe('addTodoLs', () => {
  const first = { description: 'test' };
  addTodoLs(first);
  const todos = getTodosls();
  const wrong = { description: "I'm not in lS" };

  test('Add todo to local storage ', () => {
    expect(todos).toEqual([{ description: 'test', index: 0 }]);
  });

  test('getting the right object', () => {
    expect(todos).not.toEqual([wrong]);
  });
});

describe('deleteTodoLS', () => {
  const second = { description: 'It deletes an item from the array', completed: false };
  addTodoLs(second);

  deleteTodoLS({ description: 'test', index: 0 });
  const todos = getTodosls();

  test('Delete todo from localStorage ', () => {
    expect(todos).toEqual([{ description: 'It deletes an item from the array', completed: false, index: 1 }]);
  });

  test('Retrieves the correct element after delete ', () => {
    expect(todos).not.toEqual([{ description: 'test', index: 0 }, { description: 'It deletes an item from the array', index: 1 }]);
  });
});

describe('clearLs', () => {
  const third = { description: '3', completed: false };
  const fourth = { description: '4', completed: true };
  addTodoLs(third);
  addTodoLs(fourth);

  test('Retrieves the correct number of object in the lS', () => {
    clearLs();
    const todos = getTodosls();
    expect(todos.length).toEqual(2);  
  });

});
