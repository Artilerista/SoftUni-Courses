function schoolGrades(array) {
    let result = new Map;
    for (let element of array) {
        let token = element.split(' ');
        let name = token.shift();
        let nums = token.map(x => Number(x));
        if (!result.has(name)) {
            result.set(name, nums);
        } else {
            for (let num of nums) {
                result.get(name).push(num);
            }
        }
    }
    let sorted = Array.from(result.entries());
    sorted.sort((a,b) => a[0].localeCompare(b[0]));
    
    
    for (let [name, nums] of sorted){
        let avg = 0;
        for (let num of nums) {
            avg+= num;
        }
        avg/= nums.length;
        console.log(`${name}: ${avg.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)