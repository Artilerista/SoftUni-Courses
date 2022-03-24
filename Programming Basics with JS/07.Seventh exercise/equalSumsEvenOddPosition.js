function equalSumsEvenOddPosition(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let printLine = '';
    for (i = startNumber; i <= endNumber; i++) {
        let oddNumber = 0;
        let evenNumber = 0;
        let currentNum = '' + i;
        for (j = 0; j < currentNum.length; j++) {
            let currentNumber = Number(currentNum.charAt(j));
            if(j % 2 === 0){
                oddNumber+= currentNumber;
            } else {
                evenNumber+= currentNumber;
            }
         }
         if(oddNumber === evenNumber){
            printLine += i + ' ';
         }
    }
    console.log(printLine);
}
equalSumsEvenOddPosition(["100000",
    "100050"])
