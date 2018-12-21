// onclick events
if (elements.resetButton != null) {
  elements.resetButton.onclick = function() { ui.reset() }
}
if (elements.nextButton != null) {
  elements.nextButton.onclick = function() { story.next() }
}

if (elements.submitNameInput != null) {
  elements.submitNameInput.onclick = function() { player.setName(nameInput.value) }
}
