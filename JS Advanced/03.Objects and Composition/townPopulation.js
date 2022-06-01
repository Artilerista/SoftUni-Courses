function townPopulation(array) {
    let list = {};
    for (const command of array) {
        let [town,population] = command.split(' <-> ');
        population = Number(population);
        if(list.hasOwnProperty(town)){
            list[town] += population;
        } else {
            list[town] = population;
        }
    }
    for (const [town,population] of Object.entries(list)) {
        console.log(`${town} : ${population}`);
    }
}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)