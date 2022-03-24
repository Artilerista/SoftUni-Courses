function tennisRanklist(input) {
    let index = 0;
    let numberOfTournament = Number(input[index]);
    index++
    let startPoints = Number(input[index]);
    index++;
    let w = 0;
    let f = 0;
    let sf = 0;
    let countW = 0;
    for (i = 1; i <= numberOfTournament; i++) {
        let roundOfTournament = input[index];
        index++;
        switch (roundOfTournament) {
            case 'W': startPoints += 2000;
                w += 2000;
                countW++;
                break;
            case 'F': startPoints += 1200;
                f += 1200;
                break;
            case 'SF': startPoints += 720;
                sf += 720;
                break;
        }
    }
    let averagePoints = (w + f + sf) / numberOfTournament;
    let percentW = countW / numberOfTournament * 100;
    console.log(`Final points: ${startPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(percentW.toFixed(2) + '%');

}
tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])
