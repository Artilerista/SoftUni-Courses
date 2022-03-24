function englishNameOfTheLastDigit(n) {
    n += '';
    n = n.split('');
    let m = n.slice(-1)[0];
    m = Number(m);
    for (let i = 0; i <= m; i++) {
        if (i === m) {
            if (i === 0) {
                console.log('zero');
            } else if (i === 1) {
                console.log('one');
            } else if (i === 2) {
                console.log('two');
            } else if (i === 3) {
                console.log('three');
            } else if (i === 4) {
                console.log('four');
            } else if (i === 5) {
                console.log('five');
            } else if (i === 6) {
                console.log('six');
            } else if (i === 7) {
                console.log('seven');
            } else if (i === 8) {
                console.log('eight');
            } else if (i === 9) {
                console.log('nine');
            } 
        }
    }
}
englishNameOfTheLastDigit(120)