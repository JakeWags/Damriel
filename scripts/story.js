const story = {
  lines: [
    "Welcome to Damriel, a land where anything is possible...",
    "You've heard many tales of treasure, conflict, and treason on the continent.",
    "You're currently on a ship travelling to Kalderan, the Capital city of Gilgar.",
    "While finishing your letter to your family back in Yulmera, you hear shouting above deck.",
    "Curious, you poke your head out of your hatch and see men pulling ropes and you hear someone shout \"Land Ho!\"",
    "You stamber up the deck to see what land you're approaching and a quick look around makes it obvious that you've arrive to the great port city of Kalderan.",
    "As the ship nears the dock, you can see hundreds of dock workers and deck hands working tirelessly, carrying boxes and boxes of goods from distant lands to be sold in the kingdoms many markets.",
    "The ship you're on carries passengers, however, many of which have gathered on the deck just as you have. The anxiety, excitement, and fear present on deck is overwhelming.",
    "Finally, the ship comes to a halt, and you are told to gather your belongings and head to the check in to be cleared for entry into the kingdom.",
    "After what seems like hours, you arrive to the check in booth where a young elven woman greets you:",
    "\"Welcome to Kalderan, Capitol of the Great Kingdom of Gilgar! May I ask your name?\"",
    "After examaning your papers and proof of identification, the woman looks up at you and says:",
    "\"Okay, looks like you're all set. Have a wonderful stay here in Kalderan!\"",
    "After grabbing your papers back and muttering a quick thank you, you decide to head out into the city, in search of who knows what.",
  ],
  currentLine: 0,
  updateText: function() {
    elements.storyText.innerHTML = this.lines[this.currentLine];
  },
  next: function() {
    this.currentLine += 1;
    if (this.currentLine === 11) {
      ui.hideNext();
      this.askName();
      this.updateText();
    } else if (this.currentLine >= this.lines.length) {
      ui.hideNext();
      ui.showContinue();
    } else {
      this.updateText();
    }
  },
  askName: function() {
    ui.showNameInput();
  },
}