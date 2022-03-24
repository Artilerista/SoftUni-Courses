function timeAdd15Minutes(input){
let hours = Number(input[0]);
let minutes = Number(input[1]);
let totalm = hours * 60 + minutes + 15;
let h = Math.floor(totalm / 60);
let m = totalm % 60;
if(h > 23){
    h = 0;
}
if(m < 10){
    console.log(`${h}:0${m}`);
} else {
    console.log(`${h}:${m}`);
}

}
timeAdd15Minutes(["23", "59"])