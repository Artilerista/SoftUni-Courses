function bestPlayer(input) {
    let max = 0;
    let bestPlayerr;
    let index = 0;
    let command = input[index];
    index++;
    while (command !== 'END') {

        let name = command;
        let goals = Number(input[index]);
        index++
        
        if (goals > max) {
            max = goals;
            bestPlayerr = name;
        }
        if (max >= 10) {
            break;
        }

        command = input[index];
        index++;


    }
    console.log(`${bestPlayerr} is the best player!`);
    if (max >= 3) {
        console.log(`He has scored ${max} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${max} goals.`);
    }
}
bestPlayer(["Rooney",
    "1",
    "Junior",
    "2",
    "Paolinio",
    "2",
    "END"])


