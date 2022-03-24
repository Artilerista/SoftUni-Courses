function passwordGenerator(array) {
    let text = array[0] + array[1];
    let word = array[2];
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let index = 0;
    let result = [];
    for (let letter of text) {
        if(vowels.includes(letter)){
            currentChar = word[index].toUpperCase();
            result.push(currentChar);
            index++;
        } else {
            result.push(letter);
        }
        if(index === word.length){
            index = 0;
        }
    }
    console.log(`Your generated password is ${result.reverse().join('')}`);
}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
]
)