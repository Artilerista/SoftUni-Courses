function sumSeconds(input){
let first = Number(input[0]);
let second = Number(input[1]);
let third = Number(input[2]);
let totaltime = first + second + third;
let m = Math.floor(totaltime / 60);
let sec = totaltime % 60;
if(sec < 10){
    console.log(`${m}:0${sec}`);

} else{
    console.log(`${m}:${sec}`);
}
}
sumSeconds(["50",
"50",
"49"])

