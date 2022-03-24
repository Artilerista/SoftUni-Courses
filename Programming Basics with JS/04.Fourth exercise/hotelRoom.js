function hotelRoom(input) {
    let mounth = input[0];
    let numberOfNights = Number(input[1]);
    let ap = 0;
    let studio = 0;
    switch (mounth) {
        case 'May':
        case 'October':
            if (numberOfNights <= 7) {
                studio = numberOfNights * 50;
                ap = numberOfNights * 65;
            } else if (numberOfNights > 14) {
                studio = (numberOfNights * 50) * 0.70;
                ap = (numberOfNights * 65) * 0.90;
            } else {
                studio = (numberOfNights * 50) * 0.95;
                ap = numberOfNights * 65;
            }
            break;
        case 'June':
        case 'September':
            if (numberOfNights > 14) {
                studio = (numberOfNights * 75.20) * 0.80;
                ap = (numberOfNights * 68.70) * 0.90;
            } else {
                studio = numberOfNights * 75.20;
                ap = numberOfNights * 68.70;
            }
            break;
        case 'July':
        case 'August':
            if (numberOfNights <= 14) {
                ap = numberOfNights * 77;
                studio = numberOfNights * 76;
            } else  {
                ap = (numberOfNights * 77) * 0.90;
                studio = numberOfNights * 76;
            }
            break;

    }
    console.log(`Apartment: ${ap.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}
hotelRoom(["June",
"14"])




