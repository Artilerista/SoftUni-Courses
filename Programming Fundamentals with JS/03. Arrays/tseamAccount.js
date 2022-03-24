function tseamAccount(array) {
    let games = array[0].split(' ');
    for (let i = 1; i < array.length; i++) {
        let command = array[i].split(' ')
        if (command[0] !== 'Play!') {
            if (command[0] === 'Install' && !games.includes(command[1])) {
                games.push(command[1]);
               
            } else if (command[0] === 'Uninstall' && games.includes(command[1])) {
                for (let j = 0; j < games.length; j++) {
                    if (command[1] === games[j]) {
                        games.splice(j, 1);
                    }

                }
                
            } else if (command[0] === 'Update' && games.includes(command[1])) {
                for (let j = 0; j < games.length; j++) {
                    let updateGame = games[j]
                    if (command[1] === games[j]) {
                        games.splice(j, 1);
                        games.push(updateGame);
                    }

                }
                
            } else if (command[0] === 'Expansion') {
                let expansion = command[1].split('-');
                let finalExpansion = expansion.join(':')
                if (games.includes(expansion[0])) {
                    for (let j = 0; j < games.length; j++) {
                        if (games[j] === expansion[0]) {
                            games.splice(j + 1, 0, finalExpansion);
                        }

                    }
                }
                
            }

        }

    }
    console.log(games.join(' '));
}
tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!'])