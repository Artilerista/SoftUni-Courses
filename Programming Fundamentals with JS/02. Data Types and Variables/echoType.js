function echoType(parameter){
let typeOfparameter = typeof parameter;
if(typeOfparameter === 'number' || typeOfparameter === 'string'){
    console.log(typeOfparameter);
    console.log(parameter);
} else {
    console.log(typeOfparameter);
    console.log('Parameter is not suitable for printing');
}
}
echoType('Hello, JavaScript!')