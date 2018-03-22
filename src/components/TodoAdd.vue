<template>
    <input
    type="text"
    v-model="title"
    @keyup.enter="add"
    :placeholder="placeholder"
    autofocus autocomplete="off">
</template>

<script>
import { guid } from '@/js/Utils';

export default {
  name: 'TodoAdd',
  props: {
    placeholder: {
      type: String,
      default: 'What needs to be done?',
    },
  },
  data() {
    return {
      title: '',
    };
  },
  methods: {
    add() {
      const title = this.title && this.title.trim();
      if (!title) {
        return;
      }
      const todo = {
        title,
        completed: false,
        uuid: guid(),
      };
      this.$emit('add', todo);
      this.title = '';
    },
  },
};
</script>

<style scoped>

</style>
