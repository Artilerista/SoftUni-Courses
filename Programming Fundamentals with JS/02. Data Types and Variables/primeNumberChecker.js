function primeNumberChecker(num) {
    isPrime = true
    if (num === 1 || num === 2) {
        console.log('true');
    }
    for (let i = 3; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log('true');
    } else {
        console.log('false');
    }
}
primeNumberChecker(8)