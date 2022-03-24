function lunchBreak(input){
let nameSeries = input[0];
let timeForSeries = Number(input[1]);
let timeForBreak = Number(input[2]);

let timeForLunch = timeForBreak / 8;
let timeForRelax = timeForBreak / 4;
let timeForWatch = timeForBreak - (timeForLunch + timeForRelax);

let diff = Math.abs(timeForWatch - timeForSeries);
if (timeForWatch >= timeForSeries){
    console.log(`You have enough time to watch ${nameSeries} and left with ${Math.ceil(diff)} minutes free time.`);
} else {
    console.log(`You don't have enough time to watch ${nameSeries}, you need ${Math.ceil(diff)} more minutes.`);
}
}
lunchBreak(["Teen Wolf",
"48",
"60"])

