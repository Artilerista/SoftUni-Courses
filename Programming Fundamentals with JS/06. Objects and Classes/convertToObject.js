function convertToObject(json) {
    let object = JSON.parse(json);
    for (let key of Object.keys(object)) {
        console.log(`${key}: ${object[key]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')