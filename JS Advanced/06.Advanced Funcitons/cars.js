function cars(array) {
    let obj = {}
    let commands = {
        create,
        set,
        print
    };
    for (const line of array) {
        let tokens = line.split(' ');
        let command = tokens[0];
        let name = tokens[1];
        let keyOrName = tokens[2];
        let valueOrName = tokens[3];
        commands[command](name, keyOrName, valueOrName);
    }


    function create(copiedName, inherit, name) {
        if (inherit === undefined) {
            obj[copiedName] = {};
        } else {
            obj[copiedName] = Object.create(obj[name]);
        }
    }
    function set(name, key, value) {
        obj[name][key] = value;
    }
    function print(name) {

        let result = [];
        for (const key in obj[name]) {
            result.push(`${key}:${obj[name][key]}`);
        }
        console.log(result.join(','));
    }


}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)