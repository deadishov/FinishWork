export const timer = ({ deadline, days, hours, minutes, seconds }) => {
    const timerDays = document.querySelector(days)
    const timerHours = document.querySelector(hours);
    const timerMinutes = document.querySelector(minutes);
    const timerSeconds = document.querySelector(seconds);
    let idInterval;

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, days, hours, minutes, seconds };
    }

    const updateClock = () => {
        let getTime = getTimeRemaining();


        if (getTime.timeRemaining > 0) {
            timerDays.textContent = getTime.days
            timerHours.textContent = getTime.hours;
            timerMinutes.textContent = getTime.minutes;
            timerSeconds.textContent = getTime.seconds;
            if (getTime.days < 10) {
                timerDays.textContent = '0' + getTime.days
            } if (getTime.hours < 10) {
                timerHours.textContent = '0' + getTime.hours;
            } if (getTime.minutes < 10) {
                timerMinutes.textContent = '0' + getTime.minutes;
            } if (getTime.seconds < 10) {
                timerSeconds.textContent = '0' + getTime.seconds;
            }
        } else {
            clearInterval(idInterval);
        }
    }
    idInterval = setInterval(updateClock, 1000);
};