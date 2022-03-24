function meetings(array) {
    let result = new Map;
    for (let element of array) {
        let [day , name] = element.split(' ');
        if(!result.has(day)){
            result.set(day , name);
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }
    for (let [day, name] of result) {
        console.log(day, '->', name);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)