function wordOccurrences(array) {
    let result = new Map;
    for (let name of array) {
        let count = 1;
        if(!result.has(name)){
            result.set(name, count);
        } else {
           let current = result.get(name);
           result.set(name, current + count);
        }
    }
    let sorted = Array.from(result.entries());
    sorted.sort((a,b) => b[1] - a[1]);
    for (let [name,count] of sorted) {
        console.log(name, '->' ,count ,'times');
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])