function furniture(array) {
    let totalCost = 0;
    let pattern = />>(?<furniture>[A-Z][a-zA-Z]+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)/;
    console.log('Bought furniture:');
    for (let line of array) {
        let match = pattern.exec(line);
        if (match) {
            console.log(match.groups.furniture);
            totalCost+= match.groups.price * match.groups.quantity;
        } 
    }
        console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
)