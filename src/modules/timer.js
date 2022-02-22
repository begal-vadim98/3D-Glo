const timer = (deadline) => {
  const timerDays = document.getElementById('timer-days'),
    timerHours = document.getElementById('timer-hours'),
    timerMinutesours = document.getElementById('timer-minutes'),
    timerSeconds = document.getElementById('timer-seconds');

  const getTimerRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timerRemaining = (dateStop - dateNow) / 1000;

    let days = Math.floor(timerRemaining / 60 / 60 / 24),
      hours = Math.floor((timerRemaining / 60 / 60) % 24),
      minutes = Math.floor((timerRemaining / 60) % 60),
      seconds = Math.floor(timerRemaining % 60);

    return {
      timerRemaining,
      days,
      hours,
      minutes,
      seconds
    }

  }

  const updateClock = () => {

    let getTime = getTimerRemaining();

    for (let key in getTime) {
      if (getTime[key] < 10) getTime[key] = "0" + getTime[key];
    }

    if (getTime.timerRemaining > 0) {
      timerDays.textContent = getTime.days;
      timerHours.textContent = getTime.hours;
      timerMinutesours.textContent = getTime.minutes;
      timerSeconds.textContent = getTime.seconds;
    } else clearInterval(idIntervalTimer);

  }

  let idIntervalTimer = setInterval(updateClock, 1000)
}

export default timer