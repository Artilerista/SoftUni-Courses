function addressBook(array) {
    let result = new Map;
    for (let element of array) {
        let [name,adres] = element.split(':');
        result.set(name , adres);
    }
    let sorted = Array.from(result.entries());
    sorted.sort((a,b) => a[0].localeCompare(b[0]));
    for (let [name , adres] of sorted){
        console.log(name, '->', adres);
    }
    
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)