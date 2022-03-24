function combinations(input) {
    let n = Number(input[0]);
    let counter = 0;
    for (i = 0; i <= n; i++) {
        for (j = 0; j <= n; j++) {
            for (g = 0; g <= n; g++) {
                if(i + j + g === n){
                    counter++;
                }
            }
        }
    }
    console.log(counter);
}
combinations(["25"])