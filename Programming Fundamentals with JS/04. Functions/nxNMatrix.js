function nxNMatrix(num) {
    let number = num;
    while (num > 0) {
        let printline ='';
        for (let i = 1; i <= number; i++) {
            printline+= number + " ";
            
        }
        console.log(printline);
        num--;
    }
}
nxNMatrix(7)