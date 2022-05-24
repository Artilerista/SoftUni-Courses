function wordsUppercase(text) {
    let pattern = /[A-Za-z0-9]+/g;
    let rgx = text.match(pattern);
    console.log(rgx.join(', ').toUpperCase());
}
wordsUppercase('Hi, how are you?')