function autoEngineeringCompany(array) {
    let cars = {};
    for (const line of array) {
        let [brand, model, quatity] = line.split(' | ');
        quatity = Number(quatity);
        if (cars.hasOwnProperty(brand) === false) {
            cars[brand] = {};
        }
        if (cars[brand].hasOwnProperty(model) === false) {
            cars[brand][model] = 0;
        }
        cars[brand][model] += quatity;
    }
    
    for (const brand in cars) {
        console.log(brand);
        for (const [model,quantity] of Object.entries(cars[brand])) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}
autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)