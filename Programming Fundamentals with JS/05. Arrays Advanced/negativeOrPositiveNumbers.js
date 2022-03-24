function negativeOrPositiveNumbers(array){
    let newArray = array.map(x => Number(x));
    let result = [];
    for (let element of newArray) {
        if(element < 0){
            result.unshift(element);
        } else {
            result.push(element)
        }
    }
    console.log(result.join('\n'));
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])