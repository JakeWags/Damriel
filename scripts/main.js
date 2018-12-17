const app = new Vue({
  el: '#app',
  data: {
    firstName: 'Jake',
    lastName: 'Wagoner'
  },
  computed: {
    fullName: function() {
      return this.firstName + ' ' + this.lastName
    }
  }
});
