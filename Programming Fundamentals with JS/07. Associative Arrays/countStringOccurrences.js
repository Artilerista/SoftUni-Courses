function countStringOccurrences(text, word) {
    word = ' ' + word + ' ';
    text = ' ' + text + ' ';
    let index = 0;
    let counter = 0;
    while(text.indexOf(word, index) !== -1){
        index = text.indexOf(word, index) + 1;
        counter++;
    }
    console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence',
    'is'
)