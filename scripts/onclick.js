let onclick = {};

define(['player','story','elements'], function(require) {
  onclick = {// onclick events
    init: function() {
      if (document.getElementById('reset') != null) {
        elements.onclicks.resetButton.onclick = function() { ui.reset() }
      }
      if (document.getElementById('nextButton') != null) {
        elements.onclicks.nextButton.onclick = function() { story.next() }
      }

      if (document.getElementById('submitName') != null) {
        elements.onclicks.submitNameInput.onclick = function() { player.setName(elements.nameInput.value) }
      }
    }
  }
});
