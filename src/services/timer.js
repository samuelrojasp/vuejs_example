class SaveTimer {
  constructor(options) {
    this.options = {
      interval: options.interval || 1000,
      autoSaveAfter: options.autoSaveAfter || 2,
      autoSaveCallback: this.isFunction(options.autoSaveCallback),
    };
    this.idleTime = 0;
  }

  setTimer() {
    let self = this;
    this.timer = setInterval(() => {
      self.checkTimer();
    }, this.options.interval);
  }

  checkTimer() {
    if (this.idleTime === this.options.autoSaveAfter) {
      this.options.autoSaveCallback();
    }

    this.idleTime++;
  }

  initializeTimer() {
    clearInterval(this.timer);
    this.idleTime = 0;
    this.setTimer();
  }

  isFunction(func) {
    if (typeof func == "function") return func;
    return () => {
      return;
    };
  }
}

export default SaveTimer;
