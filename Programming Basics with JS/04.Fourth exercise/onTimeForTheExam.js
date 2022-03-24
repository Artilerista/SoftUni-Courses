function onTimeForTheExam(input) {
    let hExam = Number(input[0]);
    let mExam = Number(input[1]);
    let hArrive = Number(input[2]);
    let mArrive = Number(input[3]);

    let minutesExam = (hExam * 60) + mExam;
    let minutesArrive = (hArrive * 60) + mArrive;
    let diff = Math.abs(minutesArrive - minutesExam);
    let h = Math.floor(diff / 60);
    let m = diff % 60;
    if (minutesExam < minutesArrive) {
        console.log('Late');
        if (diff < 60) {
            console.log(`${m} minutes after the start`);
        } else if (diff >= 60 && m < 10) {
            console.log(`${h}:0${m} hours after the start`);
        } else {
            console.log(`${h}:${m} hours after the start`);
        }
    } else if (minutesArrive === minutesExam || diff <= 30) {
        console.log('On time');
        if (diff !== 0) {
            console.log(`${m} minutes before the start`);
        }
    } else {
        console.log('Early');
        if (diff < 60) {
            console.log(`${m} minutes before the start`);
        } else if (diff >= 60 && m < 10) {
            console.log(`${h}:0${m} hours before the start`);
        } else {
            console.log(`${h}:${m} hours before the start`);
        }
    }

}
onTimeForTheExam(["9",
    "00",
    "10",
    "30"])








