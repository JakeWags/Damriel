define(['player',
        'elements',
        'ui',
        'story',
        'onclick'],
  function(require) {
    player.savePlayer();
    ui.updateCoins(player.balance);
  });
