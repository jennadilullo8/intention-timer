class Activity {
  constructor(category, description, minutes, seconds) {
    this.id = Date.now();
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
  }

  startTimer() {
    this.minutes = parseInt(minInput.value);
    this.seconds = parseInt(secInput.value);
    var totalTime = this.minutes * 60 + this.seconds;
    var remainingMins = Math.floor(totalTime / 60);
    var remainingSecs = totalTime % 60;
    var countDown = setInterval( function() {
      remainingMins = remainingMins < 10 ? '0' + remainingMins : remainingMins;
      remainingSecs = remainingSecs < 10 ? '0' + remainingSecs : remainingSecs;
      timerInput.innerText = `${remainingMins}:${remainingSecs}`;
      totalTime--;
      remainingMins = Math.floor(totalTime / 60);
      remainingSecs = totalTime % 60;
      if (totalTime < 0) {
        clearInterval(countDown);
        timerButton.innerText = `You crushed and did it!`;
      }
    }, 1000);
  }

  markComplete() {
    this.completed = true;
  }

  saveToStorage() {

  }
}
