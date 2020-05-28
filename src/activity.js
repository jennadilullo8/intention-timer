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

  }

  markComplete() {
    this.completed = true;
  }

  saveToStorage() {

  }

}
