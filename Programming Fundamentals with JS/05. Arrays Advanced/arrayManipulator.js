function arrayManipulator(manipulateArray, commands) {
    for (let i = 0; i < commands.length; i++) {
        let command = commands[i].split(' ');
        if (command[0] === 'add') {
            manipulateArray.splice(Number(command[1]), 0, Number(command[2]));
        } else if (command[0] === 'addMany') {
            let firstIndex = Number(command[1]);
            for (let j = 2; j < command.length; j++) {
                manipulateArray.splice(firstIndex, 0, Number(command[j]));
                firstIndex++;
            }
        } else if (command[0] === 'contains') {
            let currentIndex = manipulateArray.indexOf(Number(command[1]));
            console.log(currentIndex);
        } else if (command[0] === 'remove') {
            manipulateArray.splice(Number(command[1]), 1);
        } else if (command[0] === 'shift') {
            for (let j = 0; j < Number(command[1]); j++) {
                let shifted = manipulateArray.shift();
                manipulateArray.push(shifted);
            }
        } else if (command[0] === 'sumPairs') {
            if (manipulateArray.length % 2 !== 0) {
                manipulateArray.push(0);
            }
            for (let j = 0; j < manipulateArray.length; j++) {
                let newNumbers = manipulateArray[j] + manipulateArray[j + 1];
                manipulateArray.splice(j,2,newNumbers)
            }

        } else if (command[0] === 'print') {
            console.log(`[ ${manipulateArray.join(', ')} ]`);
            break;
        }

    }
}
arrayManipulator([2, 2, 4, 2, 4],
["add 1 4", "sumPairs", "print"]
)