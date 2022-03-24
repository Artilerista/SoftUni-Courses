function arenaTier(array) {
    let pool = {};
    while (array[0].includes('->')) {
        let line = array.shift();
        let [name, technique, skill] = line.split(' -> ');
        skill = Number(skill);

        if (!pool.hasOwnProperty(name)) {
            pool[name] = new Map();
        }
        if (!pool[name].has(technique)) {
            pool[name].set(technique, skill);
        } else {
            if (pool[name].get(technique) < skill) {
                pool[name].set(technique, skill);
            }
        }

    }
    while (array[0] !== 'Ave Cesar') {
        let line = array.shift();
        let [firstGladiator, secondGladiator] = line.split(' vs ');
        if (pool.hasOwnProperty(firstGladiator) && pool.hasOwnProperty(secondGladiator)) {
            for (let technique of pool[firstGladiator].keys()) {
                if (pool[secondGladiator].has(technique)) {
                    let firstGladiatorSkills = pool[firstGladiator].get(technique);
                    let secondGladiatorSkills = pool[secondGladiator].get(technique);
                    if (firstGladiatorSkills > secondGladiatorSkills) {
                        delete pool[secondGladiator];
                        break;
                    } else if (firstGladiatorSkills < secondGladiatorSkills) {
                        delete pool[firstGladiator];
                        break;
                    }
                }

            }
        }


    }
    let result = {};
    for (let gladiator in pool) {
        let skills = 0
        for (let skill of pool[gladiator].values()) {
            skills += skill;
            result[gladiator] = skills;
        }
    }
    let sortedResult = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));
    let reSortedResult = sortedResult.sort((a, b) => b[1] - a[1]);
    //let secondResult = {};
    //for (let gladiator in pool) {
    //   for (let technique of pool[gladiator].keys()) {
    //      for (let skill of pool[gladiator].values()) {
    //         if (pool[gladiator].get(technique) === skill) {
    //             secondResult[technique] = skill;
    //        }
    //    }
    //  }
    //  }

    let sortedPool = Object.entries(pool);
    let reSortedSecondResult = [];
    for (let [name, map] of sortedPool) {
        let sortedmap = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
        let reSortedmap = sortedmap.sort((a, b) => b[1] - a[1]);
        for (let element of reSortedmap) {
            reSortedSecondResult.push(element);
        }
    }
    
    for (let [gladiator, skill] of reSortedResult) {
        console.log(`${gladiator}: ${skill} skill`);
        for (let [technique, skills] of reSortedSecondResult) {
            if (pool[gladiator].has(technique) && pool[gladiator].get(technique) === skills) {
                console.log(`- ${technique} <!> ${skills}`);
            }
        }
    }
}
arenaTier([
    'Peter -> Support -> 1000',
    'Peter -> Support -> 0',
    'Peter -> Duck -> 50',
    'Julius -> Shield -> 150',
    'Julius -> Duck -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Ave Cesar'])
    //console.log('---');

