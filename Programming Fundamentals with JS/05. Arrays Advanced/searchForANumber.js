function searchForANumber(array,input) {
    let elementsNumber = input[0];
    let deletedNumber = input[1];
    let specialNumber = input[2];
    let takenNumbers = array.splice(0,elementsNumber);
    takenNumbers.splice(0,deletedNumber);
    let counter = 0;
    for (let element of takenNumbers) {
        if(specialNumber === element){
            counter++;
        }
    }
    console.log(`Number ${specialNumber} occurs ${counter} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)