let save;

define(['player'], function(require) {
  save = {
    playerStats: function(){
      localStorage.setItem("balance", player.balance);
      localStorage.setItem("name", player.name);
    }
  }
});
