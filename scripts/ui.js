const ui = {
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
    elements.continueButton.style.display = "inline";
  },
  hideNext: function() {
    elements.nextButton.style.display = "none";
  },
  showNext: function() {
    elements.nextButton.style.display = "block";
  },
  showNameInput: function() {
    elements.nameInput.style.display = "inline";
    elements.submitNameInput.style.display = "inline";
  },
  hideNameInput: function() {
    elements.nameInput.style.display = "none";
    elements.submitNameInput.style.display = "none";

  }
}
