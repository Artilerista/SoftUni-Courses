function buildAWall(array) {
    let oneCubicYard = 1900;
    let addConcrete = 195;
    let concreteUsedEachDay = [];
    let sortedArray = array.sort((a,b) => a - b);
    let startIndex = sortedArray[0];
    for (j = startIndex ; j < 30 ; j++) {
        let usedConcretePerDay = 0;
        for (let i = 0; i < array.length; i++) {
            let crew = array[i];
            if (crew < 30) {
                crew++;
                array[i] = crew;
                usedConcretePerDay += addConcrete;
            }
        }
        
        concreteUsedEachDay.push(usedConcretePerDay);

    }
    let concreteInPesos = concreteUsedEachDay.map(x => x * oneCubicYard);
    let sum = 0;
    for (let day of concreteInPesos) {
        sum+= day;
    }
    console.log(concreteUsedEachDay.join(', '));
    console.log(`${sum} pesos`);
}
buildAWall([17, 22, 17, 19, 17])