function oscarsCeremony(input){
let rent = Number(input[0]);
let statuets = rent * 0.70;
let ketaring = statuets * 0.85;
let sounds = ketaring / 2;
let sum = rent + statuets + ketaring + sounds;
console.log(sum.toFixed(2));
}
oscarsCeremony(['3500'])