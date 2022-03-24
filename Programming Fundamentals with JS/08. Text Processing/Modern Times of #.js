function modernTimesOfHashTag(text) {
    text = text.split(' ');
    let array = [];
    for (let word of text) {
        if (word.startsWith('#') && word.length > 1) {
            word = word.substring(1);
            array.push(word);
        }
    }
    let isLetter = false;
    for (let word of array) {
        for (let char of word) {
            char = char.charCodeAt(0);
            if((char >= 0 && char <= 64) || (char >= 91 && char <= 96) || (char >= 123)){
                isLetter = true;
            }
        }
        if(!isLetter){
            console.log(word);
        }
        isLetter = false;
    }
}
modernTimesOfHashTag('The symbol # is known #v1ariously in English-speaking #regions as the #number sign')