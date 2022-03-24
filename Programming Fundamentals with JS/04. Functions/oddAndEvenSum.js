function oddAndEvenSum(num) {
    let string = String(num);
    function oddSum (string){
        let sum = 0;
        for (let num of string) {
            let number = Number(num);
            if(number % 2 !== 0){
                sum+= number;
            }
        }
        return sum;
    }
    function evenSum(string){
        let sum = 0;
        for (let num of string) {
            let number = Number(num);
            if(number % 2 === 0){
                sum+= number;
            }
        }
        return sum;
    }
    console.log(`Odd sum = ${oddSum(string)}, Even sum = ${evenSum(string)}`);
}
oddAndEvenSum(1000435)