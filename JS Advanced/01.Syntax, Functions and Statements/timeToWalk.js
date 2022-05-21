function timeToWalk(steps, footsLength, speed) {
    let distanceInMetre = steps * footsLength;
    let speedMetreSec = speed / 3.6;
    let time = distanceInMetre / speedMetreSec;
    let rest = Math.floor(distanceInMetre / 500);
    let restTimeInSec = rest * 60;
    let totalTimeInSec = time + restTimeInSec;
    let min = Math.floor(totalTimeInSec / 60);
    let sec = Math.round(totalTimeInSec - min * 60);
    let hour = Math.floor(totalTimeInSec / 3600);
    console.log((hour < 10 ? '0' : '') + hour + ':' + (min < 10 ? '0' : '') + min + ':' + (sec < 10 ? '0' : '') + sec);
}
timeToWalk(4000, 0.60, 5)