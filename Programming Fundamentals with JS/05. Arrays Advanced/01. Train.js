function train(array) {
    let wagons = array.shift().split(' ').map(x => Number(x));
    let maxCapacity = array.shift().split(' ').map(x => Number(x));
    for (let element of array) {
        let command = element.split(' ');
        if(command[0] === 'Add'){
            wagons.push(command[1]);
        } else {
            let passengers = Number(command[0]);
            for (let i = 0 ; i < wagons.length ; i++) {
                if(wagons[i] + passengers <= maxCapacity){
                    let newWagon = wagons[i] + passengers;
                    wagons.splice(i,1,newWagon);
                    break;
                } 
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)