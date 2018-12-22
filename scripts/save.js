const save = {
  player: function(){
    localStorage.setItem("balance", this.balance);
    localStorage.setItem("name", this.name);
  }
}
