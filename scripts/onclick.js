define(['player','story'], function(require) {
  // onclick events
  if (document.getElementById('reset') != null) {
    elements.onclicks.resetButton.onclick = function() { ui.reset() }
  }
  if (document.getElementById('nextButton') != null) {
    elements.onclicks.nextButton.onclick = function() { story.next() }
  }

  if (document.getElementById('submitName') != null) {
    elements.onclicks.submitNameInput.onclick = function() { player.setName(elements.nameInput.value) }
  }
});
