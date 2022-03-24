function travelTime(array) {
    let list = {};
    for (let line of array) {
        let [country, town, price] = line.split(' > ');
        price = Number(price);
        if (!list.hasOwnProperty(country)) {
            list[country] = new Map();
        }
        if (!list[country].has(town)) {
            list[country].set(town, price)
        } else {
            let currentPrice = list[country].get(town);
            if (currentPrice > price) {
                list[country].set(town, price);
            }
        }
    }
    let sortedCountries = Object.entries(list).sort((a, b) => a[0].localeCompare(b[0]));
    let result = {};
    for (let [country, map] of sortedCountries) {
        let sorted = Array.from(map).sort((a, b) => a[1] - b[1]);
        let line = country + ' -> '
        for (let i = 0; i < sorted.length; i++) {
            let [town, price] = sorted[i];
            if (i !== sorted.length - 1) {
                line += town + ' -> ' + price + ' ';
            } else {
                line += town + ' -> ' + price;
            }
        }
        console.log(line.trim())
    }

}
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]

)