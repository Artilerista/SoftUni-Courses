function factorialDivision(n1, n2) {
    function firstNumber(n1){
        let sum = 1;
        for (let i = n1; i >= 1; i--) {
            sum*= i;
            
        }
        return sum;
    }
    function secondNumber(n2){
        let sum = 1;
        for (let i = n2; i >= 1; i--) {
            sum*= i;
            
        }
        return sum;
    }
    let result = (n1,n2) => firstNumber(n1) / secondNumber(n2);
    console.log(result(n1,n2).toFixed(2));
}
factorialDivision(5, 2)