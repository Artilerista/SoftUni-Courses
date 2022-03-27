function mirrorWords(text) {
    let counter = 0;
    let pattern = /(@|#)([A-Za-z]{3,})\1{2}([A-Za-z]{3,})\1/g;
    let match = pattern.exec(text);
    let mirrors = [];
    while (match !== null) {
        counter++;
        let word1 = match[2];
        let word2 = match[3];
        let reversed = word2.split('').reverse().join('');
        if(word1 === reversed){
            mirrors.push(`${word1} <=> ${word2}`);
        } 
        match = pattern.exec(text);
    }
    if(counter > 0){
        console.log(`${counter} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }
    if(mirrors.length > 0) {
        console.log('The mirror words are:');
        console.log(mirrors.join(', '));
    } else {
        console.log('No mirror words!');
    }
}

mirrorWords('@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1')