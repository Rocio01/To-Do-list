import {
  addTodoLs, getTodosls, updateTodosLs, deleteTodoLS, clearLs,
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
  const wrong = {description: "I'm not in lS"};

  test('Add todo to local storage ', () => {
    expect(todos).toEqual([{ description: 'test', index: 0 }]);
  });

  test('getting the right object', () => {
    expect(todos).not.toEqual([wrong])
  })
  


});
