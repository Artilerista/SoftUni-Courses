function wordTracker(array) {
    let lookedWords = array.shift().split(' ');
    let lookedObj = new Map();
    for (let word of lookedWords) {
        lookedObj.set(word , 0);
    }
    for (let word of array) {
        if(lookedObj.has(word)){
            let currentword = lookedObj.get(word) + 1;
            lookedObj.set(word,currentword);
        }
    }
    let sorted = Array.from(lookedObj.entries());
    sorted.sort((a,b) => b[1] - a[1]);
    for (let [word , quantity] of sorted) {
        console.log(word, '-', quantity);
    }
}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)