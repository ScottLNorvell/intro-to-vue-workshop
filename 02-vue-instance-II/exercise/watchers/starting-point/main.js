const MAGIC = 1000;

new Vue({
  el: '#app',
  data: {
    km: 0,
    m: 0,
    km2: 0,
    m2: 0,
  },
  watch: {
    km2() {
      this.m2 = this.km2 * MAGIC;
    },
    m2() {
      this.km2 = this.m2 / MAGIC;
    }
  },
  computed: {
    meters: {
      get() {
        return this.m;
      },
      set(newVal) {
        this.m = newVal;
        this.km = newVal / MAGIC;
      }
    },
    kilometers: {
      get() {
        return this.km;
      },
      set(newVal) {
        this.km = newVal;
        this.m = newVal * MAGIC;
      }
    },
  }
});
