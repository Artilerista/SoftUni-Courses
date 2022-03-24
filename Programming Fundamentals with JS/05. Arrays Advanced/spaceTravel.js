function spaceTravel(array) {
    let ammunitions = array.pop();
    let fuel = array.pop();
    let arr = array[0].split('||');
    for (let element of arr) {
        let token = element.split(' ');
        let command = token[0];
        let num = Number(token[1]);
        if(command === 'Travel'){
            if(num <= fuel){
                fuel-= num;
                console.log(`The spaceship travelled ${num} light-years.`);
            } else {
                console.log('Mission failed.');
                break;
            }
        } else if (command === 'Enemy'){
            if(num <= ammunitions){
                ammunitions -= num;
                console.log(`An enemy with ${num} armour is defeated.`);
            } else if (num <= fuel){
                fuel-= num * 2;
                console.log(`An enemy with ${num} armour is outmaneuvered.`)
            } else {
                console.log('Mission failed.');
                break;
            }
        } else if (command === 'Repair'){
            ammunitions+= num * 2;
            fuel+= num;
            console.log(`Ammunitions added: ${num * 2}.`);
            console.log(`Fuel added: ${num}.`);
        } else if (command === 'Titan'){
            console.log('You have reached Titan, all passengers are safe.');
            break;
        }
    }

}
spaceTravel((['Travel 10||Enemy 30||Repair 15||Titan',
    '50',
    '80'])
)