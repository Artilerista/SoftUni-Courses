function pirates(array) {
    let cities = new Map();
    while (array[0] !== 'Sail') {
        let tokens = array.shift().split('||');
        let city = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);
        if (!cities.has(city)) {
            cities.set(city, {
                population,
                gold,
            });
        } else {
            let currentCity = cities.get(city);
            currentCity.population += population;
            currentCity.gold += gold;
        }
    }
    array.shift();
    while (array[0] !== 'End') {
        let tokens = array.shift().split('=>');
        let command = tokens[0];
        let city = tokens[1];
        let p1 = Number(tokens[2]);
        let p2 = Number(tokens[3]);
        let town = cities.get(city);
        if (command === 'Plunder') {
            console.log(`${city} plundered! ${p2} gold stolen, ${p1} citizens killed.`);
            town.population -= p1;
            town.gold -= p2;
            if (town.population === 0 || town.gold === 0) {
                cities.delete(city);
                console.log(`${city} has been wiped off the map!`);
            }
        } else if (command === 'Prosper') {
            if (p1 > 0) {
                town.gold += p1;
                console.log(`${p1} gold added to the city treasury. ${city} now has ${town.gold} gold.`);
            } else {
                console.log('Gold added cannot be a negative number!');
            }
        }
    }
    if (cities.size > 0) {
        console.log(`Ahoy, Captain! There are ${cities.size} wealthy settlements to go to:`);
        for (let [city,obj] of cities.entries()) {
            console.log(`${city} -> Population: ${obj.population} citizens, Gold: ${obj.gold} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
