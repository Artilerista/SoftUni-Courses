function gladiatorInventory(array) {
    let inventory = array.shift().split(' ');
    for (let commands of array) {
        let command = commands.split(' ');
        if(command[0] === 'Buy'){
            if(!inventory.includes(command[1])){
                inventory.push(command[1]);
            }
        } else if (command[0] === 'Trash'){
            if(inventory.includes(command[1])){
                let index = inventory.indexOf(command[1]);
                inventory.splice(index,1);
            }
        } else if (command[0] === 'Repair'){
            if(inventory.includes(command[1])){
                let index = inventory.indexOf(command[1]);
                let repair = inventory.splice(index,1).join(' ');
                inventory.push(repair);
            }
        } else if (command[0] === 'Upgrade'){
            let token = command[1].split('-');
            if(inventory.includes(token[0])){
                let index = inventory.indexOf(token[0]);
                let newtoken = token.join(':');
                inventory.splice(index + 1,0,newtoken);
            }
        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
)