function hogwarts(array) {
    let str = array.shift();
    for (let line of array) {
        let tokens = line.split(' ');
        let command = tokens[0].toLowerCase();
        if (command === 'abracadabra') {
            break;
        } else if (command === 'abjuration') {
            for (let letter of str) {
                let n = letter.charCodeAt();
                if (n >= 97 && n <= 122) {
                    let newLetter = letter.toUpperCase();
                    str = str.replace(letter, newLetter);
                }
            }
            console.log(str);
        } else if (command === 'necromancy') {
            for (let letter of str) {
                let n = letter.charCodeAt();
                if (n >= 65 && n <= 90) {
                    let newLetter = letter.toLowerCase();
                    str = str.replace(letter, newLetter);
                }
            }
            console.log(str);
        } else if (command === 'illusion') {
            let p1 = tokens[1];
            let p2 = tokens[2];
            let index = Number(p1);
            if (index >= 0 && index < str.length) {
                let replaced = str[index];
                str = str.replace(replaced, p2);
                console.log('Done!');
            } else {
                console.log('The spell was too weak.');
            }
        } else if (command === 'divination') {
            let p1 = tokens[1];
            let p2 = tokens[2];
            if (str.includes(p1)) {
                str = str.split(p1).join(p2);
            }
            console.log(str)
        } else if (command === 'alteration') {
            let p1 = tokens[1];
            if (str.includes(p1)) {
                let index = str.indexOf(p1);
                let firstHalf = str.substring(0, index);
                let secondHalf = str.substring(index + p1.length);
                str = firstHalf + secondHalf;
                console.log(str);
            }
        } else {
            console.log('The spell did not work!');
        }
    }
}
hogwarts(["h",
    "Target Target Target",
    "Abjuration",
    "Necromancy",
    "Alteration master",
    "Abracadabra"])