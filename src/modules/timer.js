export const timer = ({ deadline, days, hours, minutes, seconds, timerIndex }) => {

    const timerDays = document.querySelectorAll(days)
    const timerHours = document.querySelectorAll(hours);
    const timerMinutes = document.querySelectorAll(minutes);
    const timerSeconds = document.querySelectorAll(seconds);
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
            timerDays[timerIndex].textContent = getTime.days
            timerHours[timerIndex].textContent = getTime.hours;
            timerMinutes[timerIndex].textContent = getTime.minutes;
            timerSeconds[timerIndex].textContent = getTime.seconds;
            if (getTime.days < 10) {
                timerDays[timerIndex].textContent = '0' + getTime.days
            } if (getTime.hours < 10) {
                timerHours[timerIndex].textContent = '0' + getTime.hours;
            } if (getTime.minutes < 10) {
                timerMinutes[timerIndex].textContent = '0' + getTime.minutes;
            } if (getTime.seconds < 10) {
                timerSeconds[timerIndex].textContent = '0' + getTime.seconds;
            }
        } else {
            clearInterval(idInterval);
            timerDays[timerIndex].textContent = '00'
            timerHours[timerIndex].textContent = '00'
            timerMinutes[timerIndex].textContent = '00'
            timerSeconds[timerIndex].textContent = '00'
        }
    }
    updateClock()
    idInterval = setInterval(updateClock, 1000);
};