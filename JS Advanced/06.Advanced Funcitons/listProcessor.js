function listProcessor(array) {
    let inner = [];
    let commands = {
        add,
        remove,
        print
    }
    for (const line of array) {
        let [command, str] = line.split(' ');
        commands[command](str);
    }

    function add(str) {
        inner.push(str);
    }
    function remove(str) {
        inner = inner.filter(string => string !== str);
    }
    function print() {
        console.log(inner.join(','))
    }
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
