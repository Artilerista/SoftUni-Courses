function serializeString(array) {
    let obj = {}
    let word = array[0];
    for (let i = 0 ;i < word.length; i++) {
        let char = word[i];
        if(!obj.hasOwnProperty(char)){
            obj[char] = new Set(); 
        }
        obj[char].add(i);
    }
    let entries = Object.entries(obj);
    for (let [char, set] of entries) {
        let result = char + ':';
        for (let index of set) {
            result+= index + '/';
        }
        console.log(result.substring(0, result.length - 1));
    }
}
serializeString(["abababa"])