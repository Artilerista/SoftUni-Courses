function lowestPricesInCities(array) {
    const result = {};
    for (const iterator of array) {
        let [town,product,price] = iterator.split(' | ');
        price = Number(price);
        if(!result.hasOwnProperty(product)){
            result[product] = {
                city: town,
                money: price
            }
        } else {
            const currentPrice = result[product]['money']
            if(currentPrice > price){
                result[product]['money'] = price;
                result[product]['city'] = town;
            } 
        }
    }
    for (const [product,object] of Object.entries(result)) {
       const values = Object.values(object)
       console.log(`${product} -> ${values[1]} (${values[0]})`);
    }
}
lowestPricesInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999']
)