function darts(input) {
    let maxpoints = 301;
    let name = input[0];
    let index = 1;
    let counterShots = 0;
    let counterPoints = 0;
    let unsuccesful = 0;
    let command = input[index];
    index++;
    let points = Number(input[index]);
    index++;

    while (maxpoints > 0) {
        if (command === 'Retire') {
            break;
        }
        switch (command) {

            case 'Double': points *= 2;

                break;
            case 'Triple': points *= 3;
                break;
        }
        if (points <= maxpoints) {
            counterShots++;
            maxpoints -= points;
        } else {
            unsuccesful++;
        }
        command = input[index];
        index++;
        points = Number(input[index]);
        index++;

    }
    if (command === 'Retire') {
        console.log(`${name} retired after ${unsuccesful} unsuccessful shots.`);
    } else {
        console.log(`${name} won the leg with ${counterShots} shots.`);
    }

}
darts(['Michael van Gerwen',
    'Triple',
    '20',
    'Triple',
    '19',
    'Double',
    '10',
    'Single',
    '3',
    'Single',
    '1',
    'Triple',
    '20',
    'Triple',
    '20',
    'Double',
    '20'])