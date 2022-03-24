function towns(array) {
    let result = [];
    for (let element of array) {
        let token = element.split(' | ');
        let city = token[0];
        let latitude = Number(token[1]).toFixed(2);
        let longitude = Number(token[2]).toFixed(2);
        let list = {
            town: city,
            latitude: latitude,
            longitude: longitude,
        }
        result.push(list);
    }
    for (let obj of result) {
        console.log(obj);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)