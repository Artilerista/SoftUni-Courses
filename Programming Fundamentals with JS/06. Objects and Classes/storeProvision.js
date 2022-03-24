function storeProvision(array, array2) {
    let list = {};
    for (let i = 0; i < array.length; i+=2) {
        let currentProduct = array[i];
        let currentQuantity = Number(array[i + 1]);
        list[currentProduct] = currentQuantity;
    }
    for (let i = 0; i < array2.length; i+=2) {
        let currentProduct = array2[i];
        let currentQuantity = Number(array2[i + 1]);
        if(list[currentProduct] !== undefined){
            list[currentProduct] += currentQuantity;
        } else {
            list[currentProduct] = currentQuantity;
        }
    }
    for (let key of Object.keys(list)) {
        console.log(`${key} -> ${list[key]}`)
    }
    
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)