function bombNumbers(array, input) {
    let bombNumber = input[0];
    let power = input[1];
    while(array.includes(bombNumber)){
        let bombIndex = array.indexOf(bombNumber);
        let startingDetonation = Math.max(0,bombIndex - power);
        let powerOfBomb = power * 2 + 1;
        array.splice(startingDetonation,powerOfBomb);
    }
    let sum = 0;
   for (let number of array) {
       sum+=number;
   }
   console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
)