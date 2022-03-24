function lettersChangeNumbers(text) {
    let array = text.split(' ');
    let filtredArray = array.filter(x => x.length > 0);
    let sum = 0;
    for (let word of filtredArray) {
        let currentSum = 0;
        let num = Number(word.substring(1, word.length - 1));
        let startChar = word[0];
        let endChar = word[word.length - 1];
        if(startChar === startChar.toLocaleUpperCase()){
            let numOfstartChar = startChar.toLocaleLowerCase().charCodeAt();
            currentSum+= num / (numOfstartChar - 96);
        } else {
            let numOfstartChar = startChar.charCodeAt();
            currentSum+= num * (numOfstartChar - 96);
        }
        if(endChar === endChar.toLocaleUpperCase()){
            let numOfendChar = endChar.toLocaleLowerCase().charCodeAt();
            sum += currentSum - (numOfendChar - 96);
        } else {
            let numOfendChar = endChar.charCodeAt();
            sum += currentSum + (numOfendChar - 96);
        }
    }
    console.log(sum.toFixed(2));
}
lettersChangeNumbers('P34562Z q2576f   H456z')