<template>
  <div>
    <input type="text" v-model="title">
  </div>
</template>

<script>
import { guid } from '@/js/Utils';

export default {
  name: 'TodoAdd',
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
    },
  },
};
</script>

<style scoped>

</style>
