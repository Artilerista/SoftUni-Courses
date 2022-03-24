function triangleOfNumbers(n){
for(let i = 1 ; i <= n ; i++){
    let line = '';
    for(let j = 1 ; j <= n; j++){
        line+= i + " ";
        if(i === j){
            break;
        }
    }
    console.log(line);
}
}
triangleOfNumbers(3)