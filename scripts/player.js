let player;

define(['ui', 'save'], function(require) {
  player = {
    name: localStorage.getItem("name") || "John Doe",
    balance: parseInt(localStorage.getItem("balance")) || 100,
    savePlayer: function() {
      save.player();
    },
    setName: function(name) {
      this.name = name;
      console.log(this.name);
      this.savePlayer();
      ui.hideNameInput();
      ui.showNext();
    },
    getName: function() {
      return this.name;
    }
  }
});
