<template>
  <li :class="{'completed': localTodo.completed, 'editing': isEditing }">
    <div class="view">
      <input class="toggle"
        type="checkbox"
        v-model="localTodo.completed">
      <label @dblclick="isEditing=true">{{ localTodo.title }}</label>
      <button class="destroy" @click="remove(todo)"></button>
    </div>
    <input class="edit"
      type="text"
      v-model.trim="localTodo.title"
      v-todo-focus="isEditing"
      @blur="doneEdit"
      @keyup.enter="doneEdit"
      @keyup.esc="isEditing=false">
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isEditing: false,
      localTodo: this.todo,
      oldTitle: '',
    };
  },
  created() {
    this.localTodo = Object.assign({}, this.todo);
    this.oldTitle = this.todo.title;
  },
  directives: {
    'todo-focus': function (el, binding) {
      if (binding.value) {
        el.focus();
      }
    },
  },
  watch: {
    'localTodo.completed': function () {
      this.$emit('doneEdit', this.localTodo);
    },
  },
  methods: {
    doneEdit() {
      this.isEditing = false;
      // no change return
      if (this.localTodo.title === this.oldTitle) {
        return;
      }
      this.oldTitle = this.localTodo.title;
      this.$emit('doneEdit', this.localTodo);
    },
    remove() {
      this.$emit('remove', this.localTodo);
    },
  },

};
</script>

<style scoped>

</style>
