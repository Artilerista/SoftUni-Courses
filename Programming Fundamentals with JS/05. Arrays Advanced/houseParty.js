function houseParty(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(' ');
        if(command[2] === 'going!'){
            if(!newArray.includes(command[0])){
                newArray.push(command[0]);
            } else {
                console.log(`${command[0]} is already in the list!`);
            }
        } else if (command[2] === 'not'){
            let index = newArray.indexOf(command[0]);
            if(index === -1){
                console.log(`${command[0]} is not in the list!`);
            } else {
                newArray.splice(index,1);
            }
        }
    }
    console.log(newArray.join('\n'));
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

)