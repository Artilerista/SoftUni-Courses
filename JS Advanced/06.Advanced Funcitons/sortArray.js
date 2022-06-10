function sortArray(array, commnad) {
    let commands = {
        asc,
        desc
    }
    if (commnad === 'asc') {
        commands[commnad](array);
    } else {
        commands[commnad](array);
    }
    function asc(array) {
        array.sort((a, b) => a - b);
    }
    function desc(array) {
        array.sort((a, b) => b - a);
    }
    return array;
}
sortArray([14, 7, 17, 6, 8], 'asc')