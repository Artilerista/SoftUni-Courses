function sumOfTwoNumbers(input){
let startNumber = Number(input[0]);
let endNumber = Number(input[1]);
let target = Number(input[2]);
let counter = 0;
let isFound = true;
for(i = startNumber ; i <= endNumber ; i++){
    for(j = startNumber ; j <= endNumber ; j++){
        counter++;
        if(i + j === target){
            console.log(`Combination N:${counter} (${i} + ${j} = ${target})`);
            isFound = false;
            break;
        }
    }
    if(!isFound){
        break;
    }
}
if (isFound){
    console.log(`${counter} combinations - neither equals ${target}`);
}
}
sumOfTwoNumbers(["23",
"24",
"20"])

