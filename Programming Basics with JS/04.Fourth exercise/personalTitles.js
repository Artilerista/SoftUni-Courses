function personalTitles(input){
let aged = Number(input[0]);
let gender = input[1];
if (gender === 'm'){
    if (aged >= 16){
        console.log('Mr.');
    } else {
        console.log('Master');
    }
} else if(gender === 'f') {
    if (aged >= 16){
        console.log('Ms.');
    } else{
        console.log('Miss');
    }
}
     
    

}
personalTitles(["12",
"f"])
