function palindromeIntegers(array) {
    for (let i = 0; i < array.length; i++) {
        let fristString = String(array[i]);
        let secondString = fristString.split('').reverse().join('');
        if(fristString === secondString){
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
palindromeIntegers([123, 323, 421, 121])