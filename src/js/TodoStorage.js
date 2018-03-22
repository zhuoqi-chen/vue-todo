const STORAGE_KEY = 'vueTodoList';
const TODOS = (() => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch (error) {
    return [];
  }
})();
const todoStorage = {
  fetch() {
    TODOS.forEach((todo, index) => {
      /* eslint no-param-reassign: "error" */
      todo.id = index;
    });
    todoStorage.uid = TODOS.length;
    return TODOS;
  },
  add(todo) {
    TODOS.push(todo);
    todoStorage.save(TODOS);
  },
  save(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};
export default todoStorage;
