function carFactory(object) {
    const car = {};
    const engine = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monter: { power: 200, volume: 3500 }
    }
    const carriage = {
        hatchback: { type: 'hatchback', color: object.color },
        coupe: { type: 'coupe', color: object.color }
    }
    car.model = object.model;
    if (object.power <= 90) {
        car.engine = engine.small;
    } else if (object.power > 90 && object.power <= 120) {
        car.engine = engine.normal;
    } else if (object.power > 120) {
        car.engine = engine.monter;
    }
    if (object.carriage === 'hatchback') {
        car.carriage = carriage.hatchback;
    } else {
        car.carriage = carriage.coupe;
    }
    if (object.wheelsize % 2 === 0) {
        object.wheelsize -= 1;
        const wheels = [object.wheelsize, object.wheelsize, object.wheelsize, object.wheelsize];
        car.wheels = wheels;
    } else {
        const wheels = [object.wheelsize, object.wheelsize, object.wheelsize, object.wheelsize];
        car.wheels = wheels;
    }
    return car;
}
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}

))