function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let finalSum = 0;
    let destination;
    let type;
    if (budget <= 100) {
        destination = 'Bulgaria';
        switch (season) {
            case 'summer': finalSum = budget * 0.30;
                type = 'Camp';
                break;
            case 'winter': finalSum = budget * 0.70;
                type = "Hotel";
                break;
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        switch (season) {
            case 'summer': finalSum = budget * 0.40;
                type = 'Camp';
                break;
            case 'winter': finalSum = budget * 0.80;
                type = "Hotel";
                break;
        }
    } else {
        destination = 'Europe';
        switch (season) {
            case 'summer':
            case 'winter': finalSum = budget * 0.90;
                type = "Hotel";
                break;
        }
    }
    if (budget <= 100 && (season === 'summer' || season === 'winter')) {
        console.log(`Somewhere in ${destination}`);
        console.log(`${type} - ${finalSum.toFixed(2)}`);
    } else if (budget <= 1000 && (season === 'summer' || season === 'winter')) {
        console.log(`Somewhere in ${destination}`);
        console.log(`${type} - ${finalSum.toFixed(2)}`);
    } else {
        console.log(`Somewhere in ${destination}`);
        console.log(`${type} - ${finalSum.toFixed(2)}`);
    }
}
journey(["1500", "summer"])