function netherRealms(string) {
    let regexSplit = /\s*,\s*/g;
    let deamons = string
        .split(regexSplit)
        .sort((a, b) => a.localeCompare(b));
    let list = {};
    let nameTest = /[^\s ,]+/g;
    for (let deamon of deamons) {

        let regexForHealth = /[^\d\*\.\+\-\/]/g;
        let matchHealth = deamon.match(regexForHealth);
        let health = 0;
        for (let char of matchHealth) {
            health += char.charCodeAt(0);
        }
        let regexForDmg = /[\+\-]?\d+[.]?\d*/g;
        let matchDmg = deamon.match(regexForDmg);
        let dmg = 0;
        if (matchDmg !== null) {
            for (let num of matchDmg) {
                if (num[0] === '-') {
                    let number = Number(num.substring(1));
                    dmg -= number;
                } else {
                    dmg += Number(num);
                }
            }
        } else {
            dmg = 0;
        }
        let regexForOpration = /[\*\/]/g;
        let matchForOpration = deamon.match(regexForOpration);
        if (matchForOpration !== null) {
            for (let opration of matchForOpration) {
                if (opration === '*') {
                    dmg *= 2;
                } else {
                    dmg /= 2;
                }
            }
        }
        if (!list.hasOwnProperty(deamon))
            list[deamon] = {
                health: health,
                damage: dmg,
            }

    }
    let sorted = Object.entries(list).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [deamon, obj] of sorted) {
        console.log(`${deamon} - ${obj.health} health, ${obj.damage.toFixed(2)} damage`);
    }
}
netherRealms('M3ph1st0**, Azazel')