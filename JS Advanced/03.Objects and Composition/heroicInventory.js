function heroicInventory(array) {
    const result = [];
    for (const iterator of array) {
        let [name, level, items] = iterator.split(' / ');
        level = Number(level);
        if (items === undefined) {
            items = [];
        } else {
            items = items.split(', ');
        }
        const object = {
            name,
            level,
            items
        }
        result.push(object);
    }
    return JSON.stringify(result);
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)