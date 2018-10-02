<template>
  <div class="note-count">
    Note count: <strong>{{count}}</strong>
  </div>
</template>

<script>
import Bus from '../bus';

export default {
  name: "NoteCountComponent",
  data() {
    return {
      count: 0
    };
  },
  created() {
    Bus.$on('new-note', () => this.count++);
  }
};
</script>
