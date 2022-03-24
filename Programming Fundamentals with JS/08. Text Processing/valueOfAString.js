function valueOfAString(array) {
    let text = array[0];
    let caseSensetive = array[1];
    let sum = 0
    if(caseSensetive === 'LOWERCASE'){
        for (let char of text) {
            if(char === char.toLocaleLowerCase()){
                let numOfChar = char.charCodeAt();
                if(numOfChar >= 97 && numOfChar <= 122){
                    sum += numOfChar;
                }
            }
        }
    } else if (caseSensetive === 'UPPERCASE'){
        for (let char of text) {
            if(char === char.toLocaleUpperCase()){
                let numOfChar = char.charCodeAt();
                if(numOfChar >= 65 && numOfChar <= 90){
                    sum += numOfChar;
                }
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
}
valueOfAString(['HelloFromMyAwesomePROGRAM',
'LOWERCASE']
)