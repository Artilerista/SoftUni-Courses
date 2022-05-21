function roadRadar(speed, area) {
    let motorway = 130;
    let interstate = 90;
    let city = 50;
    let residential = 20;
    let difference = 0;
    difference = speed - motorway;
    if (speed <= motorway && area === 'motorway') {
        console.log(`Driving ${speed} km/h in a ${motorway} zone`);
    } else if (speed <= interstate && area === 'interstate') {
        console.log(`Driving ${speed} km/h in a ${interstate} zone`);
    } else if (speed <= city && area === 'city') {
        console.log(`Driving ${speed} km/h in a ${city} zone`);
    } else if (speed <= residential && area === 'residential') {
        console.log(`Driving ${speed} km/h in a ${residential} zone`);
    } else if (speed > motorway && area === 'motorway') {
        difference = speed - motorway;
        if (difference <= 20) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorway} - speeding`);
        } else if (difference > 20 && difference <= 40) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorway} - excessive speeding`);
        } else if (difference > 40) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorway} - reckless driving`);
        }
    } else if (speed > interstate && area === 'interstate') {
        difference = speed - interstate;
        if (difference <= 20) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstate} - speeding`);
        } else if (difference > 20 && difference <= 40) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstate} - excessive speeding`);
        } else if (difference > 40) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstate} - reckless driving`);
        }
    } else if (speed > city && area === 'city') {
        difference = speed - city;
        if (difference <= 20) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${city} - speeding`);
        } else if (difference > 20 && difference <= 40) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${city} - excessive speeding`);
        } else if (difference > 40) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${city} - reckless driving`);
        }
    } else if (speed > residential && area === 'residential') {
        difference = speed - residential;
        if (difference <= 20) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residential} - speeding`);
        } else if (difference > 20 && difference <= 40) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residential} - excessive speeding`);
        } else if (difference > 40) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residential} - reckless driving`);
        }
    }
}
roadRadar(40, 'city')