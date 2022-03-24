function sumNumbers(input){
let end = Number(input[0]);
let index = 1;
let n = Number(input[index]);
let sum = 0;
while (sum < end){
    sum+= n;
    index++
    n = Number(input[index]);
}
console.log(sum);
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
