function argumentInfo(...params) {
    let counterObj = {};
    for (const param of params) {
        console.log(`${typeof param}: ${param}`)
        if (counterObj.hasOwnProperty(typeof param) === false) {
            counterObj[typeof param] = 0;
        }
        counterObj[typeof param]++;
    }
    let sortedCounter = Object.entries(counterObj).sort((a, b) => b[1] - a[1]);

    for (const [type, counter] of sortedCounter) {
        console.log(`${type} = ${counter}`);
    }
}
argumentInfo(42, 52, 63, 'cat', 'dog', 'baba', function () { console.log('Hello world!'); })