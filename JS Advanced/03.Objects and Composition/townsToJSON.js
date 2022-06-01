function townsToJSON(array) {
    const result = [];
    function towns (city){
        return {
            Town: city.town,
            Latitude: city.latitude,
            Longitude: city.longitude,
        };
    }
    for (let i = 1; i < array.length; i++) {
        const line = array[i].split('|').map(x => x.trim()).filter(x => x.length !== 0);
        let town = line[0];
        let latitude = Number(line[1]).toFixed(2);
        let longitude = Number(line[2]).toFixed(2);
        const city = {
            town: town,
            latitude: Number(latitude),
            longitude: Number(longitude),
        };

        result.push(towns(city));
    }
    return JSON.stringify(result);
}
console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
))