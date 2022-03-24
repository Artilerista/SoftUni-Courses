function tradeCommissions(input) {
    let city = input[0];
    let num = Number(input[1]);
    let finalsum = 0
    if (num >= 0 && num <= 500) {
        switch (city) {
            case 'Sofia': finalsum = num * 0.05; break;
            case 'Varna': finalsum = num * 0.045; break;
            case 'Plovdiv': finalsum = num * 0.055; break;
            default: console.log('error'); break;
        }
    } else if (num > 500 && num <= 1000) {
        switch (city) {
            case 'Sofia': finalsum = num * 0.07; break;
            case 'Varna': finalsum = num * 0.075; break;
            case 'Plovdiv': finalsum = num * 0.08; break;
            default: console.log('error'); break;
        }

    } else if (num > 1000 && num <= 10000) {
        switch (city) {
            case 'Sofia': finalsum = num * 0.08; break;
            case 'Varna': finalsum = num * 0.10; break;
            case 'Plovdiv': finalsum = num * 0.12; break;
            default: console.log('error'); break;
        }

    } else if (num > 10000) {
        switch (city) {
            case 'Sofia': finalsum = num * 0.12; break;
            case 'Varna': finalsum = num * 0.13; break;
            case 'Plovdiv': finalsum = num * 0.145; break;
            default: console.log('error'); break;
        }

    } else {
        console.log('error');
    }
    if ((city === 'Sofia' || city === 'Varna' || city === 'Plovdiv') && num >= 0) {
        console.log(finalsum.toFixed(2));
    }
}
tradeCommissions(["Plovdiv",
    "-25"])

