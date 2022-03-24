function inventory(array) {
    let arr = [];
    for (let element of array) {
        let token = element.split(' / ');
        let champ = token[0];
        let lev = Number(token[1]);
        let items = token[2];
        arr.push({
            hero: champ,
            level: lev,
            items: items,
        })
    } 
    arr.sort((a,b) => a.level - b.level);
    for (let obj of arr) {
        console.log(`Hero: ${obj.hero}`);
        console.log(`level => ${obj.level}`);
        console.log(`items => ${obj.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)