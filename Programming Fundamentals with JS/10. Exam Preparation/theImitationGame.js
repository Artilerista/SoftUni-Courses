function theImitationGame(array) {
    let message = array.shift();
    for (let line of array) {
        let tokens = line.split('|');
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];
        if (command === 'Decode') {
            console.log(`The decrypted message is: ${message}`);
            break;
        } else if (command === 'Move') {
            let number = Number(p1);
            let movedLetters = message.substring(0, number);
            let secondHalf = message.substring(number);
            message = secondHalf + movedLetters;
        } else if (command === 'Insert') { 
            let index = Number(p1);
            message = message.substring(0,index) + p2 + message.substring(index);
        } else if (command === 'ChangeAll') {
            message = message.split(p1).join(p2);
        }
    }
}
theImitationGame([`zzHe`,
    `ChangeAll|z|l`,
    `Insert|2|o`,
    `Move|3`,
    `Decode`
])