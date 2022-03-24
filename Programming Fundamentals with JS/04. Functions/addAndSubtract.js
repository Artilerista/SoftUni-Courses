function addAndSubtract(n1, n2, n3) {
    function addFirstTwo(number1, number2) {
        return number1 + number2;
    }
    function subtract (result , number3){
        return result - number3;
    }
    console.log(subtract(addFirstTwo(n1,n2),n3));
    
}
addAndSubtract(23, 6, 10)