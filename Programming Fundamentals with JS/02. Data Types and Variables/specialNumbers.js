function specialNumbers(num) {
    for (let i = 1; i <= num; i++) {
        let number = String(i);
        let sum = 0;
        for(let j = 0 ; j < number.length ; j++){
           sum+= Number(number[j]); 
        }
        if(sum === 5 || sum === 7 || sum === 11){
            console.log(`${number} -> True`);
        } else {
            console.log(`${number} -> False`);
        }
    }

}
specialNumbers(15)