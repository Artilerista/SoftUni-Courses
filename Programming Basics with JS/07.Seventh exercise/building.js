function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

 
    for (let i = floors; i > 0; i--) {
        let text = "";
        for (let j = 0; j < rooms; j++) {
            if (i == floors) {
                text += "L" + i + j + " ";
            } else if (i % 2 == 0) {
                text += "O" + i + j + " ";
            } else {
                text += "A" + i + j + " ";
            }
        }
        console.log(text);
    }
}
building(["6", "4"])