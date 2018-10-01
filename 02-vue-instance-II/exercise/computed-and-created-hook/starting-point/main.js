new Vue({
  el: '#app',
  data: {
    users: []
  },
  computed: {
    reverseUsers() {
      return this.users.reverse();
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        this.users = response.data;
      });
  }
});

