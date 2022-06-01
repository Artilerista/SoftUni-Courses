function storeCatalogue(array) {
    const object = {};
    for (const iterator of array) {
        let [product, price] = iterator.split(' : ');
        price = Number(price);
        object[product] = price;
    }
    const sorted = Object.entries(object).sort((a, b) => a[0].localeCompare(b[0]));
    let firstChar = sorted[0][0][0];
    console.log(firstChar)
    const result = [];
    for (const [product, price] of sorted) {
        if(firstChar !== product[0]){
            console.log(product[0]);
            firstChar = product[0];
        }
        console.log(`  ${product}: ${price}`);
        
    }
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)