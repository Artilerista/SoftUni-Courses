function firstAndLastKNumbers(array) {
let firstNum = array.shift();
console.log(`${array.slice(0,firstNum).join(' ')}\n${array.slice(-firstNum).join(' ')}`);
}
firstAndLastKNumbers([2,7, 8, 9])