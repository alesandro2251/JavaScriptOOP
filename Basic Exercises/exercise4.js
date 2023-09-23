// Create a class called Time. Upon initialization, it should receive hours, minutes, and seconds (integers).
// The class should also have class attributes max_hours equal to 23,
//    max_minutes equal to 59, and max_seconds equal to 59.
//  You should also create 3 additional instance methods:
// - set_time(hours, minutes, seconds) - updates the time with the new values
// - get_time() - returns "{hh}:{mm}:{ss}"
// - next_second() - updates the time with one second (use the class attributes for validation) and returns
// the new time (use the get_time() method)

class Time {
  hours;
  minutes;
  seconds;
  maxHours;
  maxMin;
  maxSec;

  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.maxHours = 23;
    this.maxMin = 59;
    this.maxSec = 59;
  }

  setTime(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  getTime() {
    console.log(
      (this.hours < 10 ? "0" : "") +
        this.hours +
        ":" +
        (this.minutes < 10 ? "0" : "") +
        this.minutes +
        ":" +
        (this.seconds < 10 ? "0" : "") +
        this.seconds
    );
  }

  nextSecond() {
    this.seconds += 1;

    if (this.maxSec < this.seconds) {
      this.minutes += 1;
      this.seconds = 0;
      if (this.maxMin < this.minutes) {
        this.hours += 1;
        this.minutes = 0;
        if (this.maxHours < this.hours) {
          this.hours = 0;
        }
      }
    }
    this.getTime()
  }
}

time = new Time(11, 59, 58);
time.nextSecond();
time.nextSecond();
time.nextSecond();

