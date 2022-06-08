function attachEventsListeners() {
    let object = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let btnDays = document.getElementById('daysBtn');
    let btnHours = document.getElementById('hoursBtn');
    let btnMinutes = document.getElementById('minutesBtn');
    let btnSeconds = document.getElementById('secondsBtn');

    btnDays.addEventListener('click', convert);
    btnHours.addEventListener('click', convert);
    btnMinutes.addEventListener('click', convert);
    btnSeconds.addEventListener('click', convert);

    function convert(event) {
        let currentButtonParent = event.currentTarget.parentElement;
        let field = currentButtonParent.querySelector('label');
        if (field.textContent === 'Days: ') {
            hours.value = object.hours * Number(days.value);
            minutes.value = object.minutes * Number(days.value);
            seconds.value = object.seconds * Number(days.value);
        } else if (field.textContent === 'Hours: ') {
            days.value = Number(hours.value) / object.hours;
            minutes.value = Number(hours.value) * 60;
            seconds.value = (Number(hours.value) * 60) * 60;
        } else if (field.textContent === 'Minutes: ') {
            days.value = Number(minutes.value) / object.minutes;
            hours.value = Number(minutes.value) / 60;
            seconds.value = Number(minutes.value) * 60;
        } else if (field.textContent === 'Seconds: ') {
            days.value = Number(seconds.value) / object.seconds;
            hours.value = (Number(seconds.value) / 60) / 60;
            minutes.value = Number(seconds.value) / 60;
        }
    }
}