function secretChat(array) {
    let text = array.shift();
    for (let line of array) {
        let tokens = line.split(':|:');
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];
        if(command === 'Reveal'){
            console.log(`You have a new text message: ${text}`);
            break;
        } else if (command === 'InsertSpace'){
            let index = Number(p1);
            let firstHalf = text.substring(0,index);
            let secondHalf = text.substring(index);
            text = firstHalf + ' ' + secondHalf;
            console.log(text);
        } else if (command === 'Reverse'){
            let index = text.indexOf(p1);
            if(index !== -1){
                 let firstHalf = text.substring(0,index);
                 let secondHalf = text.substring(index + p1.length);
                 let reversed = text.substring(index, p1.length + index).split('').reverse().join('');
                 text = firstHalf + secondHalf + reversed;
                 console.log(text);
            } else {
                console.log('error')
            }
        } else if (command === 'ChangeAll'){
            text = text.split(p1).join(p2);
            console.log(text);
        }
    }
}
secretChat(['heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal',
])