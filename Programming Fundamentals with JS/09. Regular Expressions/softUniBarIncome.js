function softUniBarIncome(array) {
    let totalIncome = 0;
    let pattern = /%(?<customers>[A-Z][a-z]+)%[^|.$%]*<(?<product>\w+)>[^|.$%]*\|(?<counter>\d+)\|[^|.$%]*?(?<price>\d+(\.\d+)?)\$/;
    for (let line of array) {
        let match = pattern.exec(line);
        if (line === 'end of shift') {
            console.log(`Total income: ${totalIncome.toFixed(2)}`);
        }
        if (match) {
            totalIncome += Number(match.groups.counter) * Number(match.groups.price);
            let currentPrice = Number(match.groups.counter) * Number(match.groups.price);
            console.log(`${match.groups.customers}: ${match.groups.product} - ${currentPrice.toFixed(2)}`);
        }
    }
}
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']

)