function catalogue(array) {
    let list = [];
    for (let element of array) {
        let currentObj = {};
        let token = element.split(' : ');
        let productName = token[0];
        let productPrice = Number(token[1]);
        currentObj.productName = productName;
        currentObj.productPrice = productPrice;
        list.push(currentObj);
    }
    list.sort((a, b) => a.productName.localeCompare(b.productName));
    let word;
    for (let element of list) {
        let name = element.productName;
        let currentWord = name[0];
        if(currentWord !== word){
        console.log(currentWord);
        word = currentWord;
        }
        console.log(`  ${element.productName}: ${element.productPrice}`);
    }

}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)