function numberPyramid(input){
let n = Number(input[0]);
let current = 1;
let isBigger = false;
let printCurrentLine = '';
for(rows = 1 ; rows <= n ; rows++){
    for(nums = 1 ; nums <= rows ; nums++){
        if(current > n){
            isBigger = true;
            break;
        }
        printCurrentLine += current + ' ';
        current++;
    }
    console.log(printCurrentLine);
    printCurrentLine = '';
    if(isBigger){
        break;
    }
}
}
numberPyramid(['15'])