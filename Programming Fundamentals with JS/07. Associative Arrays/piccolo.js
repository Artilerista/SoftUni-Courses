function piccolo(array) {
    let list = new Set();
    for (let element of array) {
        let [comand,num] = element.split(', ');
        if(comand === 'IN'){
            list.add(num);
        } else {
            list.delete(num);
        }
    }
    
    let sorted = Array.from(list).sort()
    for (let element of sorted) {
        console.log(element)
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)