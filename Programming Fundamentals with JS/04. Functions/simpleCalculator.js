function simpleCalculator(a, b, operator) {
    let multiply = (a, b) => a * b;
    let subtract = (a, b) => a - b;
    let add = (a, b) => a + b;
    let divide = (a, b) => a / b;
    switch (operator) {
        case 'multiply':
            console.log(multiply(a,b));
            break;
        case 'divide':
            return (divide(a,b));
            break;
        case 'add':
            return (add(a,b));
            break;
        case 'subtract':
            return (subtract(a,b));
            break;
    }

}
simpleCalculator(5,5,'multiply')