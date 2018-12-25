let stats;

define(['util/save','ui/ui'], function(require) {
  stats = {
      totalCoins: localStorage.getItem('totalCoins') || player.balance,
      totalKills: localStorage.getItem('totalKills') || 0,
      updateTotalCoins: function(amount) {
        this.totalCoins += amount;
        ui.updateStats();
        save.stats();
      },
      updateTotalKills: function(amount) {
        this.totalKills += amount;
        ui.updateStats();
        save.stats();
      },
  };
});
