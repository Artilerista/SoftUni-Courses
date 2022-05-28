function sortAnArrayBy2Criteria(array) {
    let sorted = array.sort(solve)
    function solve(a, b) {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    }
    console.log(sorted.join('\n'));
}
sortAnArrayBy2Criteria(['alpha',
    'beta',
    'gamma']
)