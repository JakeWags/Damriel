define(['onclick','player','ui'], function(require) {
    onclick.init();
    player.savePlayer();
    ui.updateCoins(player.balance);
});
