function pascalCaseSplitter(text) {
    let result = [];
    let word = text[0]
    for (let i = 1; i < text.length; i++) {
        let char = text[i];
        let charToUpperCase = char.toUpperCase();
        if (charToUpperCase !== char) {
            word+= char;
        } else{
            result.push(word);
            word = char;
        }
    }
    result.push(word);
    console.log(result.join(', '));

}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')