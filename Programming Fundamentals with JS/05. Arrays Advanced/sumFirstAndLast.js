function sumFirstAndLast(array){
let arrayOfNums = array.map(x => Number(x));
let firstNum = arrayOfNums.pop();
let secondNum = arrayOfNums.shift();
console.log(firstNum + secondNum);
}
sumFirstAndLast(['20', '30', '40'])