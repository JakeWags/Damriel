let save;

define(['player/player'], function(require) {
  save = {
    player: function() {
      localStorage.setItem("balance", player.balance);
      localStorage.setItem("name", player.name);
    },
    stats: function() {
      localStorage.setItem("totalCoins", stats.totalCoins);
      localStorage.setItem("totalKills", stats.totalKills);
    }
  }
});
