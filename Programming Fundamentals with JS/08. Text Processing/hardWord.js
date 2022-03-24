function hardWord(array) {
    let text = array.shift();
    let words = array[0];
    let currentWord = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char === '_') {
            currentWord += char;
            if ((char === '_') && (text[i + 1] !== '_')) {
                for (let word of words) {
                    if (word.length === currentWord.length) {
                        text = text.replace(currentWord, word);
                    }
                }
            }
        } else {
            currentWord = '';
        }
    }


    console.log(text);
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)