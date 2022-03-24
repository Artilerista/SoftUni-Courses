function theatrePromotions(day, age) {
    if (age >= 0 && age <= 122) {
        switch (day) {
            case 'Weekday':
                if (age > 18 && age <= 64) {
                    console.log(18 + '$');
                } else {
                    console.log(12 + '$');
                }
                break;
            case 'Weekend':
                if (age > 18 && age <= 64) {
                    console.log(20 + '$');
                } else {
                    console.log(15 + '$');
                }
                break;
            case 'Holiday':
                if (age > 18 && age <= 64) {
                    console.log(12 + '$');
                } else if (age >= 64) {
                    console.log(10 + '$');
                } else {
                    console.log(5 + '$');
                }
                break;
        }
    } else {
        console.log('Error!');
    }
}
theatrePromotions('Holiday', 15)