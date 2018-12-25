define(['ui/onclick','player/player','ui/ui','player/stats'], function(require) {
    onclick.init();
    player.savePlayer();
    ui.updateCoins(player.balance);
    ui.updateStats();
});
