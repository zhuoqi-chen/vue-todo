<template>
  <div>
    <todo-add @add="onAdd"></todo-add>
    <todo-item
      v-for="todo in todos"
      @editDone="onEditDone"
      @delete="onDelete"
      :key="todo.uuid"></todo-item>
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
  },
};
</script>

<style scoped>

</style>
