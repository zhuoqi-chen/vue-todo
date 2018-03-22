<template>
  <div class="todoapp">
    <header class="header">
      <h1>todos</h1>
    <todo-add
      class="new-todo"
      @add="onAdd"></todo-add>
    </header>
    <ul class="todo-list">
        <todo-item
          class="todo"
            v-for="todo in todos"
            :todo="todo"
            @doneEdit="onDoneEdit"
            @remove="onRemove"
            :key="todo.uuid"></todo-item>
    </ul>
  </div>
</template>

<script>
import TodoStorage from '@/js/TodoStorage';
import TodoAdd from '@/components/TodoAdd';
import TodoItem from '@/components/TodoItem';

export default {
  name: 'Homepage',
  data() {
    return {
      todos: TodoStorage.fetch(),
    };
  },
  components: {
    TodoAdd,
    TodoItem,
  },
  methods: {
    onAdd(todo) {
      TodoStorage.add(todo);
    },
    onDoneEdit(todo) {
      TodoStorage.modify(todo);
    },
    onRemove(todo) {
      TodoStorage.remove(todo);
    },
  },
};
</script>

<style scoped>

</style>
