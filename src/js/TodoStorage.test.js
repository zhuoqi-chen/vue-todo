import TodoStorage from './TodoStorage';

beforeEach(() => {
  localStorage.clear();
});
describe('TodoStorage', () => {
  it('get', () => {
    expect(TodoStorage.fetch()).toEqual([]);
  });
  it('add ', () => {
    const todo = {
      title: 'xxx',
      uuid: 123,
    };
    TodoStorage.add(todo);
    expect(TodoStorage.fetch()).toEqual([todo]);
  });
});
