function accountBalance(input) {
    let index = 0;
    let n = input[index];
    let total = 0;
    while (n !== "NoMoreMoney") {
        n = Number(input[index]);
        if (n < 0){
            console.log(`Invalid operation!`);
            break;
        }
        console.log("Increase: " + n.toFixed(2));
        total+=n;
        index++;
        n = input[index];
}
console.log("Total: " + total.toFixed(2));
}
accountBalance(["120",
"45.55",
"-150"])

