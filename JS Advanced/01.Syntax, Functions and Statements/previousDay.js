function previousDay(year, month, day) {
    if (month === 1 && day === 1) {
        year--;
        month = 12;
        day = 31;
    } else if (month === 2 && day === 1){
        month--;
        day = 31;
    } else if (month === 3 && day === 1 && year % 4 === 0){
        month--;
        day = 29;
    } else if (month === 4 && day === 1 && year % 4 !== 0){
        month--;
        day = 31;
    } else if (month === 5 && day === 1){
        month--;
        day = 30;
    } else if (month === 6 && day === 1){
        month--;
        day = 31;
    } else if (month === 7 && day === 1){
        month--;
        day = 30;
    } else if (month === 8 && day === 1){
        month--;
        day = 31;
    } else if (month === 9 && day === 1){
        month--;
        day = 31;
    } else if (month === 10 && day === 1){
        month--;
        day = 30;
    } else if (month === 11 && day === 1){
        month--;
        day = 31;
    } else if (month === 12 && day === 1){
        month--;
        day = 30;
    } else {
        day--;
    }
    console.log(`${year}-${month}-${day}`);
}
previousDay(2016, 10, 1)