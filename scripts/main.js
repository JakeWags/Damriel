define(['ui/onclick','player','ui/ui'], function(require) {
    onclick.init();
    player.savePlayer();
    ui.updateCoins(player.balance);
});
