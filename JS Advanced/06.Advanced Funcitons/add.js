function solution(number) {
    function add (incrementer) {
        return result = number + incrementer;
    }
    return add;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
