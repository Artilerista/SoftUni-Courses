function juiceFlavors(array) {
    let bottles = {};
    let juices = {};
    for (const line of array) {
        let [juice, quatity] = line.split(' => ');
        quatity = Number(quatity);
        if (juices.hasOwnProperty(juice) == false) {
            juices[juice] = 0;
        }
        juices[juice] += quatity;
        if (juices[juice] >= 1000) {
            let result = Math.floor(juices[juice] / 1000);
            if(bottles.hasOwnProperty(juice) === false) {
                bottles[juice] = 0;
            }
            bottles[juice] += result;
            juices[juice] = juices[juice] - (result * 1000);
        }
    }
    for (const juice in bottles) {
        console.log(`${juice} => ${bottles[juice]}`);
    }
}
juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
)