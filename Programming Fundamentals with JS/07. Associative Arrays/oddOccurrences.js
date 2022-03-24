function oddOccurrences(input) {
    let array = input.split(' ');
    let list = new Map();
    for (let element of array) {
        element = element.toLowerCase()
        if(!list.has(element)){
            list.set(element,0);
        } 
        let word = list.get(element) + 1;
        list.set(element,word);
    }
    let result = [];
    for (let [word,num] of list){
        if(list.get(word) % 2 !== 0){
            result.push(word);
        }
    }
    console.log(result.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')