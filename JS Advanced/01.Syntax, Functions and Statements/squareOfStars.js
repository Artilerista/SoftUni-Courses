function squareOfStars(n) {
    if(n == undefined) {
        for (let i = 0; i < 5; i++) {
            let result = '';
            for (let j = 0; j < 5; j++) {
                result+= '* '
            }   
            console.log(result.trim());         
        }  
    } else {
        for (let i = 0; i < n; i++) {
            let result = '';
            for (let j = 0; j < n; j++) {
                result+= '* '
            }   
            console.log(result.trim());         
        }
    }
}
squareOfStars(7)