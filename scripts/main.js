define(['player',
        'ui',
        'story',
        'elements',
        'save',
        'onclick'],
  function(require) {
    player.savePlayer();
    ui.updateCoins(player.balance);
  });
