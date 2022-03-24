function arrayManipulations(array) {
    let arrayForManipulate = array.shift().split(' ');
    for (let element of array) {
      element = element.split(' ');
        let commnad = element[0];
        let numAsString = element[1];
        let secondNumAsString = element[2];
        switch (commnad) {
            case 'Add':
                arrayForManipulate.push(numAsString);
                break;
            case 'Remove':
                arrayForManipulate = arrayForManipulate.filter(x => x != numAsString);
                break;
            case 'RemoveAt':
                arrayForManipulate.splice(numAsString,1);
                break;
            case 'Insert':
                arrayForManipulate.splice(secondNumAsString,0,numAsString);
        }
    }
    console.log(arrayForManipulate.join(' '));
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)