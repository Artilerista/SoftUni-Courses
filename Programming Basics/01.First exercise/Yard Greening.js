function yardGreening(input){
let yard = Number (input[0]);
let fullPrice = yard*7.61;
let discount = fullPrice*0.18;
let finalPrice = fullPrice-discount;
console.log(`The final price is: ${finalPrice} lv.`);
console.log(`The discount is: ${discount} lv.`);
}
yardGreening(['550'])