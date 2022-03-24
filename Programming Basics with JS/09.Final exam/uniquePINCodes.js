function uniquePINCodes(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let n3 = Number(input[2]);
    let printLine = '';
    for (a = 2; a <= n1; a++) {
        for (b = 2; b <= n2; b++) {
            if (b === 2 || b === 3 || b === 5 || b === 7) {
                for (c = 2; c <= n3; c++) {
                    if (a % 2 === 0 && c % 2 === 0) {
                        printLine = "" + a + " " + b + " " + c;
                        console.log(printLine);
                    }
                }
            }

        }
    }
}



uniquePINCodes(["3", "5", "5"])