function heroesOfCodeAndLogic(array) {
    let n = array.shift();
    let heroes = {};
    for (let i = 0; i < n; i++) {
        let tokens = array.shift().split(' ');
        let name = tokens[0];
        let health = Number(tokens[1]);
        let mana = Number(tokens[2]);
        heroes[name] = {
            health,
            mana,
        }
    }
    for (let line of array) {
        let tokens = line.split(' - ');
        let command = tokens[0];
        let name = tokens[1];
        let p1 = Number(tokens[2]);
        let p2 = tokens[3];
        let hero = heroes[name];
        if (command === 'End') {
            break;
        } else if (command === 'CastSpell') {
            if (hero.mana >= p1) {
                let mana = hero.mana - p1
                hero.mana = mana;
                console.log(`${name} has successfully cast ${p2} and now has ${mana} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${p2}!`);
            }
        } else if (command === 'TakeDamage') {
            if (hero.health > p1) {
                let health = hero.health - p1;
                hero.health = health;
                console.log(`${name} was hit for ${p1} HP by ${p2} and now has ${health} HP left!`);
            } else {
                delete heroes[name];
                console.log(`${name} has been killed by ${p2}!`);
            }
        } else if (command === 'Recharge') {
            let manaRecharge = Math.min(200 - hero.mana, p1);
            hero.mana = hero.mana + manaRecharge;
            console.log(`${name} recharged for ${manaRecharge} MP!`);
        } else if (command === 'Heal') {
            let healedHealth = Math.min(100 - hero.health, p1);
            hero.health += healedHealth;
            console.log(`${name} healed for ${healedHealth} HP!`);
        }
    }
    for (let [hero, obj] of Object.entries(heroes)) {
        console.log(hero);
        console.log(`  HP: ${obj.health}`);
        console.log(`  MP: ${obj.mana}`);
    }
}
heroesOfCodeAndLogic([`2`,
    `Solmyr 85 120`,
    `Kyrre 99 50`,
    `Heal - Solmyr - 10`,
    `Recharge - Solmyr - 50`,
    `TakeDamage - Kyrre - 66 - Orc`,
    `CastSpell - Kyrre - 15 - ViewEarth`,
    `End`
])