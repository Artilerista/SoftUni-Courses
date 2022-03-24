function charactersInRange(char1, char2) {
    function smallestChar (string1,string2){
        return Math.min(string1.charCodeAt(0),string2.charCodeAt(0));
    }
    function biggestChar (string1,string2){
        return Math.max(string1.charCodeAt(0),string2.charCodeAt(0));
    }
    let start = smallestChar(char1,char2);
    let end = biggestChar(char1,char2);
    let result = [];
    for (let i = start + 1; i < end; i++) {
        result.push(String.fromCharCode(i));
        
    }
    console.log(result.join(' '));
}
charactersInRange('a', 'd')