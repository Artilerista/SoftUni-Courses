function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    index++;
    let sumPrimeNum = 0;
    let sumNonPrimeNum = 0;
    while (command !== "stop") {
        let number = Number(command);
        if (number < 0) {
            console.log('Number is negative.');
            command = input[index];
            index++;
            continue;
        }
        if (number === 1) {
            sumPrimeNum += number;
            command = input[index];
            index++;
            continue;
        }
        let numberIsPrime = true;
        for (i = 2; i < number; i++) {
            if (number % i === 0) {
                numberIsPrime = false;
            }
        }
        if (numberIsPrime) {
            sumPrimeNum += number;
        } else {
            sumNonPrimeNum += number;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNum}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNum}`);
}
sumPrimeNonPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])
