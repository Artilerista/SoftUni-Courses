function radioCrystals(array) {
    let goalThickness = array.shift();
    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];

        let cutCounter = 0;
        let lapCounter = 0;
        let grindCounter = 0;
        let eatchCounter = 0;
        let xRayCounter = 0;
        console.log(`Processing chunk ${currentNumber} microns`);
        while (currentNumber !== goalThickness) {
            if (currentNumber / 4 >= goalThickness) {
                cutCounter++;
                currentNumber = Math.floor(currentNumber / 4);
            } else if (currentNumber * 0.80 >= goalThickness) {
                lapCounter++;
                currentNumber = Math.floor(currentNumber * 0.80);
            } else if (currentNumber - 20 >= goalThickness) {
                grindCounter++;
                currentNumber = Math.floor(currentNumber - 20);
            } else if (currentNumber - 2 >= goalThickness - 1) {
                eatchCounter++;
                currentNumber = Math.floor(currentNumber - 2);
            }
            if (goalThickness - 1 === currentNumber) {
                xRayCounter++;
                currentNumber++;
            }
        }
        if (cutCounter > 0) {
            console.log(`Cut x${cutCounter}`);
            console.log('Transporting and washing');
        }
        if (lapCounter > 0) {
            console.log(`Lap x${lapCounter}`);
            console.log('Transporting and washing');
        }
        if (grindCounter > 0) {
            console.log(`Grind x${grindCounter}`);
            console.log('Transporting and washing');
        }
        if (eatchCounter > 0) {
            console.log(`Etch x${eatchCounter}`);
            console.log('Transporting and washing');
        }
        if (xRayCounter > 0) {
            console.log(`X-ray x${xRayCounter}`);
        }
        console.log(`Finished crystal ${goalThickness} microns`);
    }
}
radioCrystals([1001, 4000, 8121])