class SaveTimer {
  constructor(interval, autoSaveAfter, autoSaveCallback, dismissMessageAfter) {
    this.idleTime = 0;
    this.interval = interval;
    this.autoSaveAfter = autoSaveAfter;
    this.autoSaveCallback = autoSaveCallback;
    this.dismissMessageAfter = dismissMessageAfter;
  }

  setTimer() {
    let self = this;
    this.timer = setInterval(() => {
      self.checkTimer();
    }, this.interval);
  }

  checkTimer() {
    if (this.idleTime === this.autoSaveAfter) {
      this.autoSaveCallback();
    }

    this.idleTime++;
  }

  initializeTimer() {
    clearInterval(this.timer);
    this.idleTime = 0;
    this.setTimer();
  }
}

export default SaveTimer;
