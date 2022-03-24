function numberModification(num) {
    let arrayWithNewNumbers = [];
    let numAsString = String(num);
    let sum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        arrayWithNewNumbers.push(numAsString[i]);
        let currentNumber = Number(numAsString[i]);
        sum += currentNumber
    }
    let avgSum = sum / numAsString.length;
    if(avgSum > 5){
        console.log(num);
    } else {
        while(avgSum <= 5){
            sum+=9;
            arrayWithNewNumbers.push('9');
            avgSum = sum / arrayWithNewNumbers.length;
        }
        console.log(arrayWithNewNumbers.join(''));
    }
    


}
numberModification(5835)