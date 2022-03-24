function replaceRepeatingChars(text) {
    let result = '';
    for (let index = 0; index < text.length; index++) {
        let currentChar = text[index];
        if(currentChar !== text[index + 1]){
            result+= currentChar;
        }
    }
    console.log(result)
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')