function easterEggs(input) {
    let counterColor = '';
    let counterOrange = 0;
    let counterBlue = 0;
    let counterGreen = 0;
    let counterRed = 0;
    let eggs = Number(input[0]);
    let index = 1
    let max = -999999;
    for (i = 1; i <= eggs; i++) {
        let color = input[index];
        switch (color) {
            case "orange":
                counterOrange++;
                if (counterOrange > max) {
                    max = counterOrange;
                    counterColor = 'orange'
                }
                break;
            case "blue":
                counterBlue++;
                if (counterBlue > max) {
                    max = counterBlue;
                    counterColor= 'blue'
                }
                break;
            case "green":
                counterGreen++;
                if (counterGreen > max) {
                    max = counterGreen;
                    counterColor = 'green'
                }
                break;
            case "red":
                counterRed++;
                if (counterRed > max) {
                    max = counterRed;
                    counterColor = 'red'
                }
                break;
        }
                index++;
    }
    console.log(`Red eggs: ${counterRed}`);
    console.log(`Orange eggs: ${counterOrange}`);
    console.log(`Blue eggs: ${counterBlue}`);
    console.log(`Green eggs: ${counterGreen}`);
    console.log(`Max eggs: ${max} -> ${counterColor}`);

}
easterEggs(['7', 'orange', 'blue', 'green', 'green', 'blue', 'red', 'green'])