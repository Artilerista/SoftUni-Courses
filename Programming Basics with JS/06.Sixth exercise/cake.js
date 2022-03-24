function cake(input) {
    let w = Number(input[0]);
    let l = Number(input[1]);
    let index = 2;
    let comand = input[index];
    let cake = w * l;
    while (comand !== "STOP") {
        let pieces = Number(comand);
        cake -= pieces;
        if (cake < 0) {
            let diff = Math.abs()
            console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`);
            break;
        }
        index++;
        comand = input[index];
    }
    if(comand === 'STOP'){
        console.log(`${cake} pieces are left.`);
    }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

