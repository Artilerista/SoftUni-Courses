function getFibonator() {
    let curr = 0;
    let next = 1;
    function sum() {
        let result = curr + next;
        curr = next;
        next = result;
        return curr;
    }
    return sum
}
let fib = getFibonator();
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
