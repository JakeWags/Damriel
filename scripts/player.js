const player = {
  name: localStorage.getItem("name") || "John Doe",
  balance: parseInt(localStorage.getItem("balance")) || 100,
  savePlayer: function() {
    localStorage.setItem("balance", this.balance);
    localStorage.setItem("name", this.name);
  },
  setName: function(name) {
    this.name = name;
    story.playersName = this.name;
    this.savePlayer();
    ui.hideNameInput();
    ui.showNext();
  },
  getName: function() {
    return this.name;
  }
}
