function stringSubstring(word , text) {
    word = word.toLocaleLowerCase();
    text = text.toLocaleLowerCase().split(' ');
    for (let letter of text) {
        if(word === letter){
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);
}
stringSubstring('javascript',
    'JavaScript is the best programming language'
)