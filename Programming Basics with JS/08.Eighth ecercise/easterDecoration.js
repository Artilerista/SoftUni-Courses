function easterDecoration(input) {
    let customers = Number(input[0]);
    let index = 1;
    let finalsum = 0;
    for (i = 1; i <= customers; i++) {
        let command = input[index];
        index++;
        let items = 0;
        let sum = 0;
        while (command !== 'Finish') {
            switch (command) {
                case 'basket': sum += 1.50;
                    items++;
                    break;
                case 'wreath': sum += 3.80;
                    items++;
                    break;
                case 'chocolate bunny': sum += 7;
                    items++;                   
                    break;
            }
            command = input[index];
            index++;
        }
        if (items % 2 === 0) {
            sum *= 0.80;
        }
        finalsum += sum;
        console.log(`You purchased ${items} items for ${sum.toFixed(2)} leva.`);

    }
    let avg = finalsum / customers;
    console.log(`Average bill per client is: ${avg.toFixed(2)} leva.`);
}
easterDecoration(['2',
    'basket',
    'wreath',
    'chocolate bunny',
    'Finish',
    'wreath',
    'chocolate bunny',
    'Finish'
])