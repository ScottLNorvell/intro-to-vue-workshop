<template>
  <div class="input-submit">
    <input
      placeholder='Enter a note'
      v-model="input"
      class="input is-small"
      type="text"
      @keyup="keyup" />
    <button class="button is-primary" @click="submit">Submit</button>
  </div>
</template>

<script>
import Bus from '../bus';
export default {
  name: "InputComponent",
  data() {
    return {
      input: '',
    }
  },
  methods: {
    submit() {
      Bus.$emit('new-note', this.input);
      this.input = '';
    },
    keyup(e) {
      if (e.keyCode === 13) {
        this.submit();
      }
    }
  }
};
</script>
