function softUniReception(array) {
    array = array.map(Number);
    let a = array[0];
    let b = array[1];
    let c = array[2];
    let students = array[3];
    let sumPerHour = a + b + c;
    let hours = 0;
    while(students > 0) {
        hours++;
        if(hours % 4 !== 0){
           students-= sumPerHour;
        }
    }
    console.log(`Time needed: ${hours}h.`);
}
softUniReception(['5', '6', '4', '20'])