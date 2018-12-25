let ui;

define(['ui/elements'], function(require) {
  ui = {
    updateCoins: function(amount) {
      elements.coinsDisplay.innerHTML = amount;
    },
    reset: function() {
      if(confirm("Are you sure? This cannot be undone...")) {
        localStorage.clear();
        window.location.reload(false);
      };
    },
    showContinue: function() {
      elements.onclicks.continueButton.style.display = "inline";
    },
    hideNext: function() {
      elements.onclicks.nextButton.style.display = "none";
    },
    showNext: function() {
      elements.onclicks.nextButton.style.display = "block";
    },
    showNameInput: function() {
      elements.nameInput.style.display = "inline";
      elements.onclicks.submitNameInput.style.display = "inline";
    },
    hideNameInput: function() {
      elements.nameInput.style.display = "none";
      elements.onclicks.submitNameInput.style.display = "none";
    },
    updateStats: function() {
      if (window.location.href.includes("stats.html")) {
        elements.stats.totalCoins.innerHTML = stats.totalCoins;
        elements.stats.totalKills.innerHTML = stats.totalKills;
      }
    },
  }
});
