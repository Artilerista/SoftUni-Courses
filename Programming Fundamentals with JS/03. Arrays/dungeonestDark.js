function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;
    let isDead = false;
    let array = arr[0].split('|');
    for (let i = 0; i < array.length; i++) {
        let room = array[i].split(' ');
        if(room[0] === 'potion'){
            let currentHeal = Number(room[1]);
            if(health + currentHeal > 100){
                currentHeal = (100 + currentHeal) - (health + currentHeal);
                console.log(`You healed for ${currentHeal} hp.`);
                health+=currentHeal;
                console.log(`Current health: ${health} hp.`);
            } else {
                health+=currentHeal;
                console.log(`You healed for ${currentHeal} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
            
        } else if (room[0] === 'chest'){
            let foundedCoins = Number(room[1]);
            coins+= Number(room[1]);
            console.log(`You found ${foundedCoins} coins.`);
        } else {
            health-= Number(room[1]);
            if(health > 0){
                console.log(`You slayed ${room[0]}.`);
            } else {
                console.log(`You died! Killed by ${room[0]}.`);
                console.log(`Best room: ${i + 1}`);
                isDead = true;
                break;
            }
        }
    }
    if(!isDead){
     console.log("You've made it!");
     console.log(`Coins: ${coins}`);
     console.log(`Health: ${health}`);
    }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])